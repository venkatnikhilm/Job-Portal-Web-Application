import { Webhook } from "svix";
import User from "../models/User.js";

//API Controller Function to mange Clerk user with Database

export const clerkWebhook = async (req, res) => {
    try {
        //Create a new Webhook instance
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
        //Verify header signature
        await whook.verify(JSON.stringify(req.body), {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"],
        });

        //Get data from request body

        const {data, type} = req.body;

        //Switch case to handle different webhook events
        switch (type) {
            case 'user.created':{
                const UserData = {
                    _id:data.id,
                    name:data.first_name + ' ' + data.last_name,
                    email:data.email_addresses[0].email_address,
                    resume:'',
                    image:data.image_url
                }
                await User.create(UserData);
                res.json({})
                break;

            }
            case 'user.updated':{
                const UserData = {
                    name:data.first_name + ' ' + data.last_name,
                    email:data.email_addresses[0].email_address,
                    image:data.image_url
                }
                await User.findByIdAndUpdate(data.id, UserData);
                res.json({})    
                break;

            }

            case 'user.deleted':{
                await User.findByIdAndDelete(data.id);
                res.json({})
                break;
            }
            
        
            default:
                break;
        }
        
    } catch (error) {
        console.error(error);
        res.json({success:false, error:"Webhook Error"})
    }
}
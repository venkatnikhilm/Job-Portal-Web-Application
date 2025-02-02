import { Webhook } from "svix";
import User from "../models/User.js";

//API Controller Function to manage Clerk User with database

export const clerkWebhooks = async (req, res) => {
    try {
        //Create svix instance with clerk webhook secret
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
        //verifying header
        await whook.verify(JSON.stringify(req.body), {
            "svix-id": req.headers["svix-id"],
            "svix-signature": req.headers["svix-signature"],
            "svix-timestamp": req.headers["svix-timestamp"],
        });

        //Getting data from request body
        const {data, type} = req.body;

        //Switch case to handle different webhook types
        switch (type) {
            case 'user.created':{
                const userData = {
                    _id: data.id,
                    name: data.first_name + ' ' + data.last_name,
                    email: data.email_addresses[0].email_address,
                    resume: "",
                    image: data.image_url
                }
                await User.create(userData);
                res.json({})
                break
            }

            case 'user.updated':{
                const userData = {
                    name: data.first_name + ' ' + data.last_name,
                    email: data.email_addresses[0].email_addresse,
                    image: data.image_url
                }
                await User.findByIdAndUpdate(data.id, userData);
                res.json({})
                break

            }

            case 'user.deleted':{
                await User.findByIdAndDelete(data.id);
                res.json({})
                break
            }
                
            default:
                break;
        }

    } catch (error) {
        console.log(error.message);
        res.json({success:false,message:error.message})

    }
}
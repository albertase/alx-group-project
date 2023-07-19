// pages/api/sendmessage.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { full_name, email, message } = req.body;

        // Perform form validation
        if (!full_name || !email || !message) {
            return res.status(400).json({ error: 'Please fill in all fields' });
        }

        // Create a payload object with form data
        const payload = {
            full_name,
            email,
            message,
        };

        try {
            // Make a POST request to the endpoint
            const response = await fetch('https://api.elishatofunmi.com/subscriber/sendmessage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            // Handle successful form submission
            return res.status(200).json({ message: 'Form submitted successfully', data });
        } catch (error) {
            // Handle form submission error
            return res.status(500).json({ error: 'An error occurred while submitting the form' });
        }
    }

    // Return 405 Method Not Allowed for other request methods
    return res.status(405).end();
}

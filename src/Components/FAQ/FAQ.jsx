
const FAQ = () => {
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <h2 className="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">Frequently Asked Questions</h2>
                    <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                        <details>
                            <summary className="py-2 font-semibold text-xl outline-none cursor-pointer focus:underline"> How do I create an event on your platform?</summary>
                            <div className="px-4 pb-4">
                                <p>To create an event on our platform, simply sign in to your account or create one if you have not already. Once logged in, go to the Create Event section and fill out the event details, including the event name, date, time, location, description, and any other relevant information. You can also add tickets, set pricing, and customize the event page. After reviewing the details, click Create Event and your event will be live on our platform.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 font-semibold text-xl outline-none cursor-pointer focus:underline"> Can I sell tickets for my event on your website?</summary>
                            <div className="px-4 pb-4">
                                <p>Yes, you can sell tickets for your event through our platform. When creating your event, you have the option to set up ticket types, pricing, and availability. You can choose between free tickets, paid tickets, or different ticket tiers. Attendees can then purchase tickets securely through our website, and you can track ticket sales and attendee information in real-time.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 font-semibold text-xl outline-none cursor-pointer focus:underline"> What payment methods are supported for ticket sales?</summary>
                            <div className="px-4 pb-4 space-y-2">
                                <p>We support a variety of payment methods to make it convenient for both event organizers and attendees. You can collect payments for ticket sales using major credit cards, debit cards, and popular online payment platforms like PayPal, Stripe, and more. We prioritize security and ensure that all transactions are encrypted and processed securely.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 font-semibold text-xl outline-none cursor-pointer focus:underline"> How can I promote my event on your platform to reach a wider audience?</summary>
                            <div className="px-4 pb-4 space-y-2">
                                <p>We offer various tools and features to help you promote your event effectively. You can share your event on social media directly from our platform, utilize email marketing tools to reach your audience, and access analytics to track the performance of your event page. Additionally, we provide tips and best practices for optimizing your event listing to increase visibility and attract more attendees.</p>
                            </div>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;
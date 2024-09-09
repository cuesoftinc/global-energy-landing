import FAQ from "./FAQ";


const FrequentQuestion = () => {

    const questions = [
        "Basic Knowledge of What this is",
        "What are the steps to energy audit of your Facility?",
        "How can youth training and capacity building in renewable energy startups lead to immediate empowerment, and what are the steps involved?",
    ];

    const responses = [
        <p key="1">
            How do you view the future today with the devastating effects of global warming, which cuts across every living creature on earth, how do you view the rise in poverty mostly in developing countries amidst diverse programs to curtail this trend? Will our world stay the same or will our world get worse or will our world get better?<br /><br />
            Asking ourselves these honest and important questions today brings us to that position in reality to make a decision that would define our future on this planet. The signals we are receiving from this earth’s damaging effects indicate that we are in the danger zone (Red alert)
            <br /> <br />
            Therefore, now is the time to make that decision. Let us join hands together and use the power of collaboration and compounding infinitesimal efforts from every individual, every homes in the world, to make a decision and commitment today, and by year 2050 our world would be better and free of greenhouse gas and alongside millions would have alleviated out of poverty. like I and my family made our decision today and commitment today to do our own quota towards net zero 50. Please do the same kindly click the link below!
            <br /> <br />
            Countless benefits await you in this journey which includes:
            Youth training /Capacity building for immediate empowerment startups in renewable energy business after successful completion.
            <br /> <br />
            Access to Energy audit of your homes and offices or establishment, and an energy plan to cut down your energy usage by up to 75%.
            <br /> <br />
            Access to 60% facility to assist in migrating from fossil fuel (Generator) to clean energy sources.
            <br /> <br />
            Access to New electric cars and much more.

            Simply make your decision and commitment today!!!
        </p>,
        <p key="2">
            <p className="text-primary font-bold">Step 1</p>
            Input your energy usage by answering the questions
            <br /> <br />
            <p className="text-primary font-bold">Step 2</p>
            Your energy usage is calculated automatically for you
            <br /> <br />
            <p className="text-primary font-bold">Step 3</p>
            Based on the outcome of your total energy above, an energy plan will be prepared and sent to you via your registered email. Which includes
            <br /> <br />
            A) Mandatory Daily activities to manage your energy usage by up to 70%
            B) Migration from Fossil fuel (generator) source of energy to clean energy which will be subsidized by 60% as a member.
            <br /> <br />
            <p className="text-primary font-bold">Step 4</p>
            An opportunity will be available for you to own a brand new electric car in reference to your recorded performance on energy transition activities on item 3 (A&B) above.
            <br /> <br />
            Please note that item 3 is the main objective of this program.
            <br /> <br />
            <p className="text-primary font-bold">Step 5</p>
            Your 40% Payment
            <br /> <br />
            <p className="text-primary font-bold">Step 6</p>
            Implementation/installation of new energy source
            <br /> <br />
            <p className="text-primary font-bold">Step 7</p>
            Real time Summation of overtime daily activities to check for your qualification for electric car and other benefits.
        </p>,
        <p key="3">
            <p className="text-primary font-bold">Step 1</p>
            Must have completed secondary education.
            <br /> <br />
            <p className="text-primary font-bold">Step 2</p>
            Register to become youth member of Global energy transition and apply for the training on the website.
            <br /> <br />
            <p className="text-primary font-bold">Step 3</p>
            Complete the training and get startup kits.
            <br /> <br />
            <p className="text-primary font-bold">Step 4</p>
            Mandatory daily activities on energy transition plan which will be given to you.
            <br /> <br />
            <p className="text-primary font-bold">Step 4</p>
            Real time summation of your daily activities to check for your qualification for electric car and other benefits.
            <br /> <br />
        </p>
    ];


    return (
        <div>
            <FAQ questions={questions} responses={responses} />
        </div>
    )
}

export default FrequentQuestion;
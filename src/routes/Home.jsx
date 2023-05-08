const Home = () => {
    return (
        <div className="w-4/5 ml-32">
            <div>
                <p className="text-light-orange text-2xl">Hi, my name is</p>
                <p className="text-white font-bold text-5xl">Pujan Parikh.</p>
                <p className="text-light-gray font-bold text-4xl">I craft experiences for the web.</p>
            </div>
            <div className="text-2xl w-3/5">
                <p className="text-light-gray">I'm a <span className="text-light-orange">software developer</span> with a passion for human-centered design.</p>
                <p className="text-light-gray">I'm currently <span className="text-light-orange">looking for opportunites</span> with motivated teams to build delightful and performant experiences for the user.</p>
            </div>
            <div className="w-full">
                <button className="mt-16 text-2xl border-2 border-light-orange text-light-orange">Get in touch!</button>
            </div>
        </div >
    )
}

export default Home;
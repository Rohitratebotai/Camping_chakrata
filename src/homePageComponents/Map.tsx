const Map = () => {
    return (
        <section className='flex justify-center items-center my-14 mx-auto w-[90%] md:w-[80%] h-[50vh] md:h-[60vh]'>

            <iframe
                src="https://www.google.com/maps?q=Langapokhri%20Shirkota%20Chakrata%20Mussoorie%20Road&output=embed"
                className="w-full h-full rounded-xl shadow-lg border border-gray-300"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            >
            </iframe>

        </section>
    )
}

export default Map;
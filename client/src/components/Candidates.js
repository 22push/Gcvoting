import React, { useState } from 'react'
import image1 from '../assets/g2.png'
import image2 from '../assets/secy.png';
import image3 from '../assets/nato_image.jpg';

import './candidates.css'

function Candidates() {

    const [selectedCand, setSelectedCand] = useState(null)

    const handleCheckboxChange = (e) => {
        console.log(e);
        setSelectedCand(e);

    }

    let arr =
        [
            {
                Name: "Ayush Gupta",
                Roll: "22EC01057",
                Branch: "EC",
                image: image1
            },

            {
                Name: "Ashish Kumar Singh",
                Roll: "22EE01073",
                Branch: "EE",
                image: image1
            },

            {
                Name: "Pushkar Gupta",
                Roll: "22EE01018",
                Branch: "EE",
                image: image2
            },

            {
                Name: "Divya Kumar",
                Roll: "22ME02040",
                Branch: "ME",
                image: "https://dummyimage.com/200x200"
            },

            {
                Name: "Vivek Singh",
                Roll: "22ME02042",
                Branch: "ME",
                image: "https://dummyimage.com/200x200"
            },
        ]

    let branch = "EE";
    let candidates = arr.filter((cand) => {
        if (cand.Branch === branch) {
            return cand;
        }
    }
    )

    candidates.push({
        Name: "NOTA",
        Roll: "NOTA",
        Branch: null,
        image: "https://dummyimage.com/200x200"
    })
    return (
        <div className="min-h-screen bg-gray-900">
            <section className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="my-font font-bold text-2xl sm:text-4xl md:text-6xl title-font mb-2 text-white ">ELECTRICAL ENGINEERING</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base md:text-xl lg:text-2xl">- - Cast your vote for the preferred candidate -  - </p>
                    </div>

                    <div className="flex flex-wrap custom">
                        {candidates.map(el => {
                            return (
                                <>
                                    <div className="p-4 lg:w-1/2 mt-4 custom2">
                                        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                            <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={el.image} />
                                            <div className="flex-grow sm:pl-8">
                                                <h2 className="title-font font-medium text-lg text-white">{el.Name}</h2>
                                                <h3 className="text-white-500 mb-3">{el.Roll === "NOTA" ? ' ' : el.Roll}</h3>
                                                <br></br>

                                                <div class="flex items-center w-full ps-4 border-2 border-gray-200 rounded dark:border-gray-600 cursor-pointer">
                                                    <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer" onChange={() => handleCheckboxChange(el.Roll)} />
                                                    <label for="bordered-radio-1" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer">Vote</label>
                                                </div>


                                            </div>
                                        </div>
                                    </div>

                                </>

                            )
                        })}
                    </div>
                </div>
                <button className='submit'>Submit</button>
            </section>
        </div>
    )
}

export default Candidates

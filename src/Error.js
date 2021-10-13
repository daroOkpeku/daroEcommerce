import React from 'react'
import { Link } from 'react-router-dom'
export default function Error() {
    return (
        <div className="w-full grid place-items-center">
     
            <section className="flex items-center justify-center mt-2 px-3 py-3 ">
                <div className="">
                    <img src="https://image.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1920.jpg" className=""/>
                </div>
                <article className="flex flex-col">
                    <button className="text-indigo-500 border border-indigo-500 w-40 py-3 px-3 rounded">Page Not Found</button>
                    <span className="text-4xl mt-3">Oh No! Error 404</span>
                    <span className="text-2xl w-3/5 mt-2">
                        Maybe Bigfoot has broken this page
                        Come back to the homepage
                    </span>
                    <span className="flex space-x-6 items-center mt-3">
                      <Link to="/">  <button className="text-indigo-500 border border-indigo-500  py-3 px-3 rounded">Back to Homepage</button></Link>
                        <button className="text-indigo-500">Vist our help center</button>
                    </span>
                </article>
            </section>

        </div>
    )
}

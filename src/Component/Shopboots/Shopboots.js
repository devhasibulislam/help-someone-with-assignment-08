import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../product/Product';
import './Shopboots.css'


const Shopboots = () => {
    const [products, setproduct] = useState([])
    const [cart, setcart] = useState([])
    useEffect(() => {
        fetch("fakedata.json")
            .then(res => res.json())
            .then(data => setproduct(data))



    }, [])
    const handlecart = (product) => {
        const search = cart.find(findCart => findCart.id === product.id);
        if (search) {
            alert("THis cart already selected");
        } else {
            if (cart.length > 3) {
                alert(" you alreay choice 4 item ")
            } else {

                const newcart = [...cart, product]
                setcart(newcart);
            }
        }

    }

    const handleReset = () => {
        setcart([]);
    }


    // generate random number
    const randomNumber = number => {
        const num = Math.round(Math.random() * (number - 1));
        if (num === undefined) {
            randomNumber(number);
        } else {
            return num;
        }
    }

    // choose lucky one
    const chooseLuckyOne = boots => {

        if (boots.length !== 0) {
            const randNum = randomNumber(boots.length);
            const luckyBoots = cart.find(luckyOne => luckyOne.id === boots[randNum].id);
            setcart([luckyBoots]);
        }
    }

    return (
        <div className='shopboots-container'>


            <div className='product-cointainer'>

                {
                    products.map(product => <Product
                        //   name={product.name}
                        //   img={product.img}
                        key={product.id}
                        product={product}
                        handlecart={handlecart}

                    ></Product>)
                }
            </div>

            <div className='cart-container'>
                <Cart
                    cart={cart}
                    handleReset={handleReset}
                    chooseLuckyOne={chooseLuckyOne}
                ></Cart>
            </div>
            <div className='bonus-part' style={{ marginTop: '1rem', padding: '1rem' }}>
                <div style={{ border: "1px solid gray", marginRight: '.5rem', padding: '1rem' }}>
                    <h1>HOW TO REACT WORK?</h1>
                    <p className='react'>
                        React js প্রতিক্রিয়া একটি ঘোষণামূলক দৃষ্টান্ত ব্যবহার করে যা আপনার আবেদন সম্পর্কে যুক্তি করা সহজ করে তোলে এবং এর লক্ষ্য দক্ষ এবং নমনীয় উভয়ই হতে পারে। এটি আপনার অ্যাপ্লিকেশানের প্রতিটি রাজ্যের জন্য সাধারণ ভিউ ডিজাইন করে এবং আপনার ডেটা পরিবর্তিত হলে প্রতিক্রিয়া দক্ষতার সাথে সঠিকভাবে আপডেট এবং রেন্ডার করবে।
                        Example:এক বন্ধু ফেসবুকে একটি ছবি পোস্ট করেছে। এখন আপনি যান এবং ছবিটি লাইক করুন এবং তারপর আপনি মন্তব্যগুলিও পরীক্ষা করতে শুরু করলেন। এখন আপনি যখন মন্তব্যগুলি ব্রাউজ করছেন তখন আপনি দেখতে পাচ্ছেন যে লাইকের সংখ্যা 1000 বেড়েছে, যেহেতু আপনি ছবিটি পছন্দ করেছেন, এমনকি পৃষ্ঠাটি পুনরায় লোড না করেও৷ এই জাদুকরী গণনা পরিবর্তন React js এর কারণে।
                    </p>
                </div>
                <div style={{ border: "1px solid gray", marginLeft: '5.rem', padding: '1rem' }}>
                    <h1>Props VS state</h1>
                    {/* <p className='vs'></p> */}
                    <div className='vs'>
                        <div className='props'>
                            <span className='blod'>props :</span> Props শুধুমাত্র পঠনযোগ্য । এটি অপরিবর্তনীয়।
                            এটি  আপনাকে যুক্তি হিসাবে একটি উপাদান থেকে অন্য উপাদানগুলিতে ডেটা প্রেরণ করতে দেয়।  এটি উপাদানগুলিকে পুনরায় ব্যবহারযোগ্য করে তোলে।
                            এটি বাহ্যিক এবং উপাদান রেন্ডার যাই হোক না কেন দ্বারা নিয়ন্ত্রিত হয়।
                        </div>
                        <div className='state'>
                            <span className='blod'>state :</span>state পরিবর্তনগুলি অ্যাসিঙ্ক্রোনাস হতে পারে। এটি  পরিবর্তনশীল।
                            এটি  উপাদান সম্পর্কে তথ্য ধারণ করে ।
                            এটি উপাদান পুনরায় ব্যবহারযোগ্য করতে পারে না   ।

                            এটি অভ্যন্তরীণ এবং প্রতিক্রিয়া উপাদান নিজেই দ্বারা নিয়ন্ত্রিত  ।
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shopboots;
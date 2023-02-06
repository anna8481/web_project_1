import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import * as Api from "../../utills/api";



function ProductList() {
    const navigate = useNavigate();
    const categoryTitle = "바지"
    const [products, setProducts] = useState(null);

    ///api/productlist/category/:categoryTitle
    const init = async () => {
        const res = await Api.get(`productlist/category/${categoryTitle}`);
        const data = await res.data;
        console.log(data)
        data.map(item => console.log(item.productName));
        setProducts(data);
    };
    useEffect(() => {
        init();
    }, []);


    function MyList({ data, onChangeMode }) {
        const lis = data.map((item) => (
            <li key={item._id}>
                {item.productName}
            </li >
        ));
        console.log(lis)
        return <ul>{lis}</ul>;
    }

    return (<>

        <div className='section'>
            <div className="container-center" >
                <input className='input'></input>
                {Array.isArray(products) && <MyList data={products} ></MyList>}

                <input type="checkbox" id="toggle" />
                <label for="toggle" class="toggleSwitch">
                    <span class="toggleButton"></span>
                </label>
            </div>
        </div>
    </>
    );
}

export default ProductList;
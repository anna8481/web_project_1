import React from "react";
import DaumPostcode from "react-daum-postcode";
import './Postcode.css'



const Postcode = ({ formData, setFormData }) => {

    const handleAddress = (data) => {
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }

        console.log(fullAddress)
        console.log(data.zonecode)

        setFormData({
            ...formData,
            address: {
                postalCode: data.zonecode,
                address1: fullAddress
            }
        });



    }

    return (
        <div >
            <DaumPostcode
                className="postmodal"
                autoClose
                onComplete={handleAddress} />
        </div >
    );
};

export default Postcode;
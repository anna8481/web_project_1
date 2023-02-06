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


    const postCodeStyle = {

        display: "block",
        position: "absolute",
        align: "center",
        margin: "auto",
        top: "20%",
        width: "100%",
        height: "60%",
        // padding: "7px",
        zIndex: 100,
    };



    return (
        <div >
            <DaumPostcode
                style={postCodeStyle}
                className="postmodal"
                autoClose
                onComplete={handleAddress} />
        </div >
    );
};

export default Postcode;
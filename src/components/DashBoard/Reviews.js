import React, {useState, useEffect} from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Title from './Title';
import Reviews from '../common/Reviews';

const url = process.env.REACT_APP_API_URL;

export default function AdminReviews() {

    const [ getData, setGetData ] = useState(false);
    const [ data, setData] = useState([]);
    
    const [clicked, setClicked] = useState(-1);

    async function getReviews() {
        await axios.post(
            url + "/v2/review/admin"
        )
        .then((res) => {
            // console.log(res.data.result);
            setData(res.data.result);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    async function deleteReview() {
        const reviewId = data[clicked]._id;

        await axios.delete(
            url + "/v2/review/admin/" + reviewId
        )
        .then((res) => {
            setGetData(false);
            setClicked(-2);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    useEffect(()=>{
        if (!getData){
            getReviews();
        }
        setGetData(true);
    },[getData, getReviews]);

    return (
    <React.Fragment>
        {clicked<=-1?
        <Title>컨설팅 후기</Title>:
        <Box sx={{ mb: 2, textAlign: 'right' }}>
            <Button variant="outlined" color="error" onClick={()=>{deleteReview()}}>
                삭제
            </Button>
        </Box>
        }
        <Reviews clicked={clicked} onClick={setClicked} data={data}/>
    </React.Fragment>
    );
};
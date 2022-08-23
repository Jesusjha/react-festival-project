import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import { useParams } from 'react-router-dom';

const TicketDetail = () => {
  
/* Destructuring the festDetail from the useParams hook. */
  const [detail, setDetail] = useState({});
	const params = useParams();

  const {title, image, price, video} = detail;
  
  
  useEffect(() => {
    getDetail()
  },[]);

  const urlDetail = `http://localhost:3333/tickets/${params.festDetail}`;

	const getDetail = async () => {

		try {
			const response = await fetch(urlDetail);
			const result = await response.json();
			setDetail(result);
      console.log(result)

		} catch (error) {
			console.log(error);
		}
	};


	return (
		<>
      <h1 className="detail__title">{title}</h1>
			<div>
      <ReactPlayer url={`https://www.youtube.com/embed/${video}`}/>
    </div>
		</>
	);
};

export default TicketDetail;
/* <ReactPlayer url={`https://www.youtube.com/embed/${video}`}/>  https://youtu.be/hEGNMnbcq6c   <iframe width="1280" height="720" src="https://www.youtube.com/embed/hEGNMnbcq6c" title="Tomorrowland 2022 THe AfterMovie" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>*/
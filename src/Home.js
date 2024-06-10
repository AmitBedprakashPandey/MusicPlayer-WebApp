import  axios from 'axios';
export default function Home(params) {
 const getdata =async()=>{
     const options = {
          method: 'GET',
          url: 'https://spotify81.p.rapidapi.com/artist_albums',
          params: {
            id: '2w9zwq3AktTeYYMuhMjju8',
            offset: '0',
            limit: '100'
          },
          headers: {
            'X-RapidAPI-Key': '11dc29b5d7msha0c09ca6980d3ddp107fd5jsnbd8f2f889a18',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
          }
        };
        
        try {
             const response = await axios.request(options);
             console.log(response.data);
        } catch (error) {
             console.error(error);
        }
     }

     getdata();
     return<>
     </>
}    
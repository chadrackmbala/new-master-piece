export default function TestGet() {

    async function getUsers() {
        try {
    
            const response = await axios.get('/users');
            // setTweetData(response.data.tweets);
            setTweetData(response.data);
            // console.log(response.data);
            return response;
        } catch (error) {
            return error;
        }
    }

    getUsers();
    return (
        <div className="flex justify-center gap-20 flex-wrap">
            
        </div>
    );
}
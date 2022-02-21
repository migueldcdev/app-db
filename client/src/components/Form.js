import { AiOutlinePlus } from 'react-icons/ai';

const Form= () => {
    return(
        <div className="container mx-auto my-5 p-5">
            <form>
                <input 
                    type="text" 
                    name="note" 
                    className="mt-5 w-full rounded-full border-gray-300 focus:border-lime-400"
                />
                <div class="container w-1/2 p-5 mx-auto">
                    <button
                        type="submit"
                        className="w-full mt-5 bg-lime-400 hover:bg-lime-500 text-white font-bold py-2 px-4 rounded"
                    >
                    <p>+ Add note</p>
                    
                    </button>

                </div>
            </form>
        </div>
    )
}

export default Form; 
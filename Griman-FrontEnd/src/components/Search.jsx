import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
    const [inputValue, setInputValue] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function handleInputChange(e) {
        setInputValue(e.target.value);
    }

    // function handleFormSubmit(e) {
    //   e.preventDefault();

    //   axios.get(`https://girman-backend.onrender.com/user/${inputValue}`)
    //     .then(function (response) {
    //       const users = response.data.users;
    //       setUsers(users);

    //       navigate(`/search/${encodeURIComponent(inputValue)}`, { state: { users } });
    //     })
    //     .catch(function (error) {
    //       console.error('Error fetching users:', error);
    //     });
    // }

    async function handleFormSubmit(e) {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await axios.get(
                `https://girman-backend.onrender.com/user/${inputValue}`
            );
            const users = response.data.users;
            navigate(`/search/${encodeURIComponent(inputValue)}`, {
                state: { users },
            });
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="w-full max-w-[734px] mx-auto px-4">
            <div className="bg-white h-[51px] rounded-[12px] gap-[10px] border-[1px] border-[#D7D7EA] flex items-center px-4 py-2">
                <div className="flex-shrink-0">
                    <svg
                        width="15"
                        height="25"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <path
                            fill="#71717A"
                            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                        />
                    </svg>
                </div>
                <div className="flex-grow">
                    <form onSubmit={handleFormSubmit}>
                        <input
                            readOnly={loading}
                            className="outline-none indent-3 bg-transparent w-full h-[29px] text-gray-700 placeholder-gray-500"
                            type="text"
                            placeholder="Search"
                            value={inputValue}
                            onChange={handleInputChange}
                        />
                    </form>
                </div>
                {loading && (
                    <>
                        <p className="text-gray-400">searching...</p>
                    </>
                )}
            </div>
        </div>
    );
}

export default Search;

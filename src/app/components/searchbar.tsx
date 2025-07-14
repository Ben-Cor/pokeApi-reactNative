export default function Searchbar() {
    return (
        <div className="flex justify-center items-center border-blue-500 border-2 text-white p-4 mt-4">
            <input className="border-white border-[1px] p-4" type="text" placeholder="Search..." />
            <button className="border-white border-[1px] p-4" type="submit">Search</button>
        </div>
    );
}
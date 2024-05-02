import { useNavigate } from "react-router-dom";

export const Landing = () => {
    const navigate=useNavigate();
  return (
    <div>
      <div className="pt-2 pt-8 ">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex justify-center">
            <img src="/chessboard.jpeg" className="h-3/4" />
          </div>
          <div className="pt-16">
            <div className="flex justify-center">
              <h1 className="text-5xl font-bold text-white mb-2">
                Play Chess Online !!!
              </h1>
            </div>
            <div className="mt-4 flex justify-center">
              <button className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-4 px-8 rounded" 
              onClick={()=>{navigate("/game")}}>
                Play Online
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Button=({onClick,children}:{onClick:()=>void,children: React .ReactNode})=>{
    return <button className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-4 px-8 rounded" 
    onClick={onClick}>
      {children}
    </button>
}
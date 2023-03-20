export default function Prodcut() {
    return(
        <div>
            <div>
                <h1 className=" px-2 py-4 space-y-2 text-4xl ">Product</h1>

                    <div className="relative group w-80 mx-2 my-4 border border-gray-400">
                        <img  className=" "src="https://download.logo.wine/logo/Hikvision/Hikvision-Logo.wine.png" alt="Hiki" />
                        <div className="absolute inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        </div>
                    </div>

                    <div className="relative group w-80 h-56 pt-10 px-2 mx-2 my-4 border border-gray-400">
                        <img  className=" "src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP6hzUsWERV1HI0K62QZrW4dpV40Gqo8QE72IMwBOQigf8rhtFiLr1mHbI1v_mzsAH0Rw&usqp=CAU" alt="Hiki" />
                        <div className="absolute inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        </div>
                    </div>
            </div>
        </div>
        
        
    )
}
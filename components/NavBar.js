import { NavData } from "../NavData";
import Link from 'next/link'



const NavBar = () => {
    return (
        <div className="py-4">
            {
                NavData.map(item=>(
                    <div keys={item.title} className="py-4 ">
                        <Link href={item.path}>
                            <a>
                                <div className="flex items-center space-x-4" >
                                    <div className="text-3xl">{item.Icon}</div>
                                    <h3 className="text-xl">{item.title}</h3>
                                </div>
                            </a>

                        </Link>

                     </div>
                ))
            }
            
        </div>
    )
}

export default NavBar


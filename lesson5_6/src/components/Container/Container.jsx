import Aside from "../Aside/Aside";
import { Header } from "../Header";


export function Container(){
 return (
    <div class="container d-flex">
            <Aside />
            <Header />
        </div>
  )
}

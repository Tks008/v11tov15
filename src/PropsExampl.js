export default function PrpsExampl(Param)
{
    return(
        <div>
         <h1>Name : {Param.name} City:{Param.address.city} City:{Param.address.pin}</h1>
         <h1>Email : {Param.email}</h1>
        </div>
    );
}
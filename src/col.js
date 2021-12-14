export default function Col(props) {
    return   <div class="col-lg-4">
    <div class="card mb-5 mb-lg-0">
        <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">{props.data.plan}</h5>
            <h6 class="card-price text-center">{props.data.price}<span class="period">/{props.data.month}</span></h6>
            <hr/>
                <ul class="fa-ul">
                    {
                        props.data.features.map(function(obj){
                            if(obj.enable){
                                return <li><span class="fa-li"><i class="fas fa-check"></i></span>{obj.isstrong ?<strong>{obj.name}</strong> : obj.name}</li>
                            }
                            else
                            {
                                return <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{obj.name}</li>
                            }
                            
                        })
                    }
                    {/* <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.list1}</li>
                    <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.list2}</li>
                    <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.list3}</li>
                    <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.list4}</li>
                    <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.list5}</li>
                    <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.list6}</li>
                    <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.list7}
                    </li>
                    <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.list8}</li> */}
                </ul>
                <div class="d-grid">
                    <a href="#" class="btn btn-primary text-uppercase">Button</a>
                </div>
        </div>
    </div>
</div>
}
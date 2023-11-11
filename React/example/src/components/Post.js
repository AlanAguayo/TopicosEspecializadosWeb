import {useState} from "react"

export function Post(){
    const [data, setData] = useState([])
    
    useEffect(()=>{
        getPost();
    })
    
    const getPost=()=>{
        fetch("url")
        .then((response) => response.json())
        .then((data)=>setData(data))
    }

    return (
        <div>
            <div>
            </div>
            <table class="table table-stripped table-bordered table-responsive">
                <thead>
                    <tr>
                        <th>userId</th>
                        <th>id</th>
                        <th>title</th>
                        <th>body</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((p) => (
                        <tr key={p.id}>
                            <td>{p.userId}</td>
                            <td>{p.id}</td>
                            <td>{p.body}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

import {useSelector} from "react-redux";
import {creds, user} from "../../interfaces/interfaces";

export function Header() {
    const user = useSelector<creds, user>(state => state.user)
    return(
        <div>
            {user.username==''&&user.password=='' ?
            <label>Not logged in</label>
            : <label>{user.username}</label>}
            <hr></hr>
        </div>

    )
}
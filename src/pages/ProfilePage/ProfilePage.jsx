import "./ProfilePage.css";

export default function ProfilePage({user}) {
    return (
        <div>
            <p>
                {user.name}<br/>
                {user.email}
            </p>
        </div>
    )
}
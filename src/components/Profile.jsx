import { Link } from 'react-router-dom'


const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://react.dev/images/docs/scientists/yXOvdOSs.jpg',
    imageSize: 90,
};

function Profile() {
    return (
        <>
            <img
                className="block mx-auto rounded-full object-cover"
                src={user.imageUrl}
                alt={'Photo of ' + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
            <h1 className="text-center text-lg"><strong>Hi, {user.name}! Welcome to your Task Dashboard</strong></h1>

        </>
    )
}

export default Profile
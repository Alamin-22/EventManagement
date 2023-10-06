import { FcGoogle } from 'react-icons/fc';
import { AiOutlineGithub } from 'react-icons/ai';
const SocialLogin = () => {
    return (
        <div>
            <div className="divider">continue with</div>
            <div className=" flex justify-evenly mb-5">
                <button className="btn btn-primary normal-case"> <FcGoogle/>Google</button>
                <button className="btn btn-primary normal-case"> <AiOutlineGithub/>GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;
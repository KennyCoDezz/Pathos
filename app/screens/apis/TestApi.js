import axios from "axios";

const instance=axios.create({
    baseURL : "https://ns.nowna.com/zohoTest",
})

export default instance;
import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID _IaAfG0l9gt5TnYtcHwLBhLL_RLNvT0Y4x_PXhmrR-Q'
    }
});
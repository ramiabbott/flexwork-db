const ipAddr = "181.20.174.7";

const getIpInfo = async (ipAddr) => {
    const infoUrl = "http://ipinfo.io/" + ipAddr;
    try {
        const response = await fetch(infoUrl);
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching IP info:", error);
        return null;
    }
};

// Convenience functions
const getCoord = async (ipAddr) => {
    const info = await getIpInfo(ipAddr);
    return info ? info.loc : null;
};

const getCity = async (ipAddr) => {
    const info = await getIpInfo(ipAddr);
    return info ? info.city : null;
};

const getCountry = async (ipAddr) => {
    const info = await getIpInfo(ipAddr);
    return info ? info.country : null;
};

const getHostname = async (ipAddr) => {
    const info = await getIpInfo(ipAddr);
    return info ? info.hostname : null;
};

const getOrg = async (ipAddr) => {
    const info = await getIpInfo(ipAddr);
    return info ? info.org : null;
};

const getPhone = async (ipAddr) => {
    const info = await getIpInfo(ipAddr);
    return info ? info.phone : null;
};

const getPostal = async (ipAddr) => {
    const info = await getIpInfo(ipAddr);
    return info ? info.postal : null;
};

const getRegion = async (ipAddr) => {
    const info = await getIpInfo(ipAddr);
    return info ? info.region : null;
};

getCity(ipAddr);
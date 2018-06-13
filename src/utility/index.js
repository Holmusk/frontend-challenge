//This function is return Parsed Json other wise null value
const getJsonData = (json) => {
    let isJson = false;
    let parsedJson = null;
    try
    {
        parsedJson = JSON.parse(json);
        isJson = (typeof(parsedJson) === 'object');
        if(isJson){
            return parsedJson;
        }
    }
    catch (ex) {
        return parsedJson;
    }
}

export default getJsonData;
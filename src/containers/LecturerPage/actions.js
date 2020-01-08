

// Loading
export const onLoading = (action) => {
    return {
        type: action,
    }
}

export const is2xx = (statusCode, action, eventData) => {
    return {
        statusCode: statusCode,
        type: action,
        eventData: eventData,
    }
}

export const isNot2xx = (statusCode, action, error) => {
    return {
        statusCode: statusCode,
        type: action,
        error: error,
    }
}
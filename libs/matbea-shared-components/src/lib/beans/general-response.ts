export interface GeneralResponse{
    metadata: ValidationsResponse;
    data: any;
    messages: MessageList;
}


export interface ValidationsResponse{
    validations: any;    
}

export interface MessageList{
    global: GlobalMessaeList;
}

export interface GlobalMessaeList{
    errors: Message[];
}

export interface Message{
    "message": string;
	"messageType": string;
	"id": string;
}


export interface SqlResult{
    sqlResult: any;
}
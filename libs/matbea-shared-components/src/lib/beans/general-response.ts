export interface GeneralResponse{
    metadata: ValidationsResponse;
    data: any;
    messages: ErrorMessageList;
}


export interface ValidationsResponse{
    validations: any;    
}

export interface ErrorMessageList{
    "global": ErrorList;
}

export interface ErrorList{
    errors : Error[];
    fyi : Error[];
}

export interface Error{
    "message": string;
	"messageType": string;
	"id": string;
}
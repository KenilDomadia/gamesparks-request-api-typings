declare namespace SparkRequests {
    /**
     * Returns a list of challenges in the state defined in the 'state’ field.
     * The response can be further filtered by passing a shortCode field which will limit the returned lists to challenges of that short code.
     * Valid states are:
     * WAITING : The challenge has been issued and accepted and is waiting for the start date.
     * RUNNING : The challenge is active.
     * ISSUED : The challenge has been issued by the current player and is waiting to be accepted.
     * RECEIVED : The challenge has been issued to the current player and is waiting to be accepted.
     * COMPLETE : The challenge has completed.
     * DECLINED : The challenge has been issued by the current player and has been declined.
     */
    class ListChallengeRequest extends _Request<_ListChallengeResponse> {
        /**
         * The number of items to return in a page (default=50)
         */
        entryCount: number;
        /**
         * The offset (page number) to start from (default=0)
         */
        offset: number;
        /**
         * The type of challenge to return
         */
        shortCode: string;
        /**
         * The state of the challenged to be returned
         */
        state: string;
        /**
         * The states of the challenges to be returned
         */
        states: string[];
    }
    class _ListChallengeResponse extends _Response {
        /**
         * The number of items to return in a page (default=50)
         */
        entryCount: number;
        /**
         * The offset (page number) to start from (default=0)
         */
        offset: number;
        /**
         * The type of challenge to return
         */
        shortCode: string;
        /**
         * The state of the challenged to be returned
         */
        state: string;
        /**
         * The states of the challenges to be returned
         */
        states: string[];
    }
}
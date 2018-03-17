declare namespace SparkRequests {
    /**
     * Returns the full details of a message.
     * 
     * ## Cloud Code Sample
     * ```javascript
     * var request = new SparkRequests.ListAchievementsRequest();
     * var response = request.Send();
     * 
     * var achievements = response.achievements; 
     * var scriptData = response.scriptData; 
     * ```
     */
    class GetMessageRequest extends _Request<_GetMessageResponse> {
        /**
         * The messageId of the message retreive
         * @Required Yes
         */
        messageId: string;
    }
    /**
     * A response containing the message data for a given message
     */
    class _GetMessageResponse extends _Response {
        /**
         * The message data
         */
        message: JSON;
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
        /**
         * The message status
         */
        status: string;
    }
}

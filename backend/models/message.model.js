import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
	{
		senderId: { // the sender Id will be an ID from the user model/collection.
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		receiverId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User", // User is a collection.
			required: true,
		},
		message: {
			type: String,
			required: true,
		},

		// createdAt, updatedAt fields to show the time at which messages are send.
	},
	{ timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;

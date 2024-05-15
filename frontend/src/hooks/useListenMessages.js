import { useEffect } from "react";

import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";

import notificationSound from "../assets/sounds/notification.mp3";

const useListenMessages = () => {
	const { socket } = useSocketContext();
	const { messages, setMessages } = useConversation();

	// listening for messages i.e message send from one side is immediately shown on the other side.
	useEffect(() => {
		socket?.on("newMessage", (newMessage) => {
			newMessage.shouldShake = true; // shake animation i.e when a message comes, it shakes for a second or two. It is present in 'index.css' file.
			// for notification sound --> present in assets folder.
			const sound = new Audio(notificationSound);
			sound.play();
			setMessages([...messages, newMessage]);
		});

		return () => socket?.off("newMessage");
	}, [socket, setMessages, messages]);
};
export default useListenMessages;

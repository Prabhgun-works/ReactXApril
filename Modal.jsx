

export default function ModalNotify({isOpen} ,{setIsOpen}) {
  //array of Objects
    const mockNotifications = [
      {id :1,  message : "Time to Disco", }, 
      {id : 2 , message : "Time to Sleep"}, 
    ] ; 
    useEffect(() => {
      const fetchData = () => {
        setNotifivations(mockNotifications); 
      }; 
      const timmer = setTimeout(fetchData , 1000) ; 

      return() => {
        clearTimeout(timmer); 
          console.log("CleanUp"); 
      }
    } , []); 
    if(!isOpen) return null ; 
    return (
      <div className="modal">
      <div className="modal-content">
        <h2>Notifications</h2>
        <ul>
          {notifications.map((note) => (
            <li key={note.id}>{note.message}</li>
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

    
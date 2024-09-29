import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserInfoById, modifyUser } from "../../core/services/userServices";
import { loadUser } from "../user/UserActions";
import { useEffect, useState } from "react";


const ProfileComponent = () => {
    const [profileInfo, setProfileInfo] = useState(undefined);
    const [profileInit, setProfileInit] = useState(undefined);
    const [newProfileModification, setNewProfileModification]= useState();


   
    const user = useSelector((state)=> state.userReducer.user)
    const [isEditing, setIsEditing] = useState(undefined);
    const navigate= useNavigate();
  const dispatch = useDispatch();

  const userRoleAdmin = user.role === 'admin';
    console.log(userRoleAdmin, 'userRoleAdmin', user._id)

    const goHomePage = () => {
        navigate('/home')
      }
//? Handlers

const saveHandler = async () => {
    setIsEditing(false);
    setProfileInit(profileInfo);
    //TODO modifyUser
    const saveAux = await modifyUser(user._id, newProfileModification);

    dispatch(
      loadUser({
        user: saveAux,
      })
    );

    const cancelHandler = () => {
        setIsEditing(false);
        setProfileInfo(profileInit);
      };


const profilewModificationHandler = (fieldName, fieldValue) => {
    setNewProfileModification({
        ...newProfileModification,
        [fieldName]: fieldValue
    })
}

      const load = async () => {
        const userAux = await getUserInfoById(user._id);
        dispatch(
            loadUser({
                user: userAux
            })
        )
      }

      useEffect(()=> {
        load()
      },[]);
  return (
    // <div>ProfileComponent
    //     <div>
    //         <button onClick={goHomePage}>Volver</button>
    //     </div>
    //     <div>
    //     <div>
    //       <h3 style={{ fontWeight: "bold", textTransform: "uppercase" }}>
    //         Información sobre tu donut
    //       </h3>
    //       <div
    //         style={{
    //           display: "flex",
    //           flexDirection: "row",
    //           gap: 5,
    //           justifyContent: "center",
    //         }}
    //       >
    //         <button
    //           style={{ fontWeight: "bold", textTransform: "uppercase" }}
    //           onClick={() => setIsEditing(true)}
    //         >
    //           Modificar perfil
    //         </button>
    //         <button
    //           onClick={goHomePage}
    //           style={{ fontWeight: "bold", textTransform: "uppercase" }}
    //         >
    //           Volver
    //         </button>
    //       </div>
    //     </div>

    //     {isEditing && (
    //       <>
    //         <div
    //           style={{
    //             marginTop: 5,
    //             display: "flex",
    //             flexDirection: "row",
    //             gap: 5,
    //             justifyContent: "center",
    //           }}
    //         >
    //           <button onClick={saveHandler}>Guardar</button>
    //           <button onClick={cancelHandler}>Cancelar</button>
    //         </div>
    //       </>
    //     )}

    //     <div>
    //       {!user ? (
    //         <div>Loading...</div>
    //       ) : (
    //         <div
    //           style={{
    //             display: "flex",
    //             flexDirection: "column",
    //             alignItems: "start",
    //           }}
    //         >
    //           <div>
    //             <span style={{ fontWeight: "bold", fontSize: 24 }}>
    //               Nombre:{" "}
    //             </span>
    //             {isEditing ? (
    //               <input
    //                 type="text"
    //                 name="nombre"
    //                 onChange={(e) =>
    //                   profilewModificationHandler(e.target.name, e.target.value)
    //                 }
    //               />
    //             ) : (
    //               <span style={{ color: "#CA5D35" }}> {user.nombre}</span>
    //             )}
    //           </div>
    //           <div>
    //             <span style={{ fontWeight: "bold", fontSize: 24 }}>Email:</span>
    //             {isEditing ? (
    //               <input
    //                 type="text"
    //                 name="email"
    //                 onChange={(e) =>
    //                   profilewModificationHandler(e.target.name, e.target.value)
    //                 }
    //               />
    //             ) : (
    //               <span style={{ color: "#CA5D35" }}> {user.email}</span>
    //             )}
    //           </div>
              
    //           <div>
    //             <span style={{ fontWeight: "bold", fontSize: 24 }}>Role:</span>
    //             {isEditing & userRoleAdmin ? (
    //               <input
    //                 type="text"
    //                 onChange={(e) =>
    //                     profilewModificationHandler(e.target.name, e.target.value)
    //                   }
    //                 name="role"
                    
    //               />
    //             ) : (
    //               <span style={{ color: "#CA5D35" }}> {user.role}</span>
    //             )}
    //           </div>
    //           <div>
    //             <span style={{ fontWeight: "bold", fontSize: 24 }}>Id:</span>
    //             {isEditing ? (
    //               <input
    //                 type="string"
    //                 value={user._id}
    //                 name="_id"
    //                 disabled
    //               />
    //             ) : (
    //               <span style={{ color: "#CA5D35" }}> {user._id}</span>
    //             )}
    //           </div>
    //         </div>
    //       )}
    //     </div>
    //   </div>


    // </div>

    <div>{user._id}</div>
  )
    }
}
export default ProfileComponent
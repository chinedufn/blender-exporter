var searchIndex = JSON.parse('{\
"blender_armature":{"doc":"Data structures and methods for dealing with armatures.","i":[[4,"JointIndicesRef","blender_armature","The joints to sample.",null,null],[13,"All","","Encodes that all of an armature’s joints you be used",0,null],[13,"Some","","Use some subset of the armature’s joints.",0,null],[3,"FrameOffset","","Describes some number of frames to offset from some other …",null,null],[3,"SampleDesc","","Describes how to sample animation keyframes",null,null],[12,"frame_offset","","NOTE: Sampling begins from the keyframe time of the first …",1,null],[12,"should_loop","","Whether or not the action should loop if <code>current_time</code> - …",1,null],[5,"get_surrounding_keyframes","","If you’re sampling frame 1.5 and there are three …",null,[[["vec",3],["f32",15]]]],[3,"ActionKeyframes","","All of the keyframes in an action.",null,null],[3,"BoneKeyframe","","The transformation for a bone at a particular time",null,null],[3,"SortedKeyframes","","Keyframes sorted in ascending frame order",null,null],[3,"BoneKeyframes","","The keyframes for the transformations for a bone",null,null],[3,"Action","","A set of keyframes along with metadata such as pose …",null,null],[4,"Bone","","A bone in an armature. Can either be a dual quaternion or …",null,null],[13,"Matrix","","A transform represented as a matrix",2,null],[13,"DualQuat","","A rigid transform represented as a dual quaternion",2,null],[3,"CoordinateSystem","","A coordinate system is used to make sense of coordinates.",null,null],[4,"Axis","","",null,null],[13,"X","","",3,null],[13,"Y","","",3,null],[13,"Z","","",3,null],[4,"Hand","","Represents the orientation of the coordinate system using …",null,null],[13,"Right","","A right handed coordinate system",4,null],[13,"Left","","A left handed coordinate system",4,null],[6,"ArmaturesByFilename","","",null,null],[6,"ArmaturesByArmatureName","","",null,null],[5,"parse_armatures_from_blender_stdout","","Given a buffer of standard output from Blender we parse …",null,[[["str",15]],["armaturesbyfilename",6]]],[5,"flatten_exported_armatures","","Convert ArmatureeshByFilename into a HashMap<…",null,[[["armaturesbyfilename",6]],[["flattenarmatureerror",4],["result",4],["hashmap",3]]]],[4,"FlattenArmatureError","","An error when trying to flatten your exported data across …",null,null],[13,"DuplicateArmatureNamesAcrossFiles","","",5,null],[12,"duplicates","blender_armature::FlattenArmatureError","",6,null],[5,"blend_towards_bones","blender_armature","Blend from the start bones towards the ending bones.",null,[[["btreemap",3],["f32",15]],[["u8",15],["bone",4],["btreemap",3]]]],[5,"interpolate_bone","","Interpolate from the start to the end bone using the …",null,[[["bone",4],["f32",15]],["bone",4]]],[5,"interpolate_dual_quats","","Interpolate from the start to the end bone using the …",null,[[["dualquaternion",3],["f32",15]],[["dualquaternion",3],["f32",15]]]],[5,"linear_200_milliseconds","","Returns 0.0 if no time has elapsed. Returns 0.5 if 100 …",null,[[["duration",3]],["f32",15]]],[4,"BlenderError","","Something went wrong in the Blender child process that …",null,null],[13,"Stderr","","Errors in Blender are written to stderr. We capture the …",7,null],[3,"BlenderArmature","","All of the data about a Blender armature that we’ve …",null,null],[11,"name","","The name of the armature",8,[[],["string",3]]],[11,"set_name","","Set the name of the armature.",8,[[["string",3]]]],[11,"bone_groups","","Blender bone groups",8,[[],["hashmap",3]]],[11,"create_bone_group","","Create a new bone group",8,[[["u8",15],["vec",3],["string",3]]]],[11,"joint_indices","","Get a bone’s index into the various Vec data structures …",8,[[],["hashmap",3]]],[11,"insert_joint_index","","Set a bone’s index into the various Vec data structures …",8,[[["u8",15],["string",3]]]],[11,"inverse_bind_poses","","Every bone’s inverse bind pose.",8,[[],["vec",3]]],[11,"set_inverse_bind_poses","","Set the inverse bind poses.",8,[[["bone",4],["vec",3]]]],[11,"bone_space_actions","","All of the actions defined on the armature, keyed by …",8,[[],["hashmap",3]]],[11,"insert_bone_space_action","","Insert an action into the map of actions.",8,[[["action",3],["string",3]]]],[11,"remove_bone_space_action","","Remove an action from the map.",8,[[],[["action",3],["option",4]]]],[11,"bone_child_to_parent","","A map of a bone chil to its parent",8,[[],["hashmap",3]]],[11,"insert_child_to_parent","","Example",8,[[["u8",15]]]],[3,"Keyframe","","The pose bones at an individual keyframe time",null,null],[11,"new","","",9,[[["bone",4],["u16",15],["vec",3]]]],[11,"bones","","All of the bones for this keyframe.",9,[[],["vec",3]]],[11,"bones_mut","","All of the bones for this keyframe.",9,[[],["vec",3]]],[11,"frame","","The frame number",9,[[],["u16",15]]],[11,"transpose_actions","","Tranpose all of the bone matrices in our armature’s …",8,[[]]],[11,"matrices_to_dual_quats","","Convert your action matrices into dual quaternions so …",8,[[]]],[11,"apply_inverse_bind_poses","","Iterate over all of the action bones and apply and …",8,[[]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"to_subset","","",0,[[],["option",4]]],[11,"is_in_subset","","",0,[[],["bool",15]]],[11,"to_subset_unchecked","","",0,[[]]],[11,"from_subset","","",0,[[]]],[11,"vzip","","",0,[[]]],[11,"from","","",10,[[]]],[11,"into","","",10,[[]]],[11,"to_owned","","",10,[[]]],[11,"clone_into","","",10,[[]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"to_subset","","",10,[[],["option",4]]],[11,"is_in_subset","","",10,[[],["bool",15]]],[11,"to_subset_unchecked","","",10,[[]]],[11,"from_subset","","",10,[[]]],[11,"vzip","","",10,[[]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"to_subset","","",1,[[],["option",4]]],[11,"is_in_subset","","",1,[[],["bool",15]]],[11,"to_subset_unchecked","","",1,[[]]],[11,"from_subset","","",1,[[]]],[11,"vzip","","",1,[[]]],[11,"from","","",11,[[]]],[11,"into","","",11,[[]]],[11,"borrow","","",11,[[]]],[11,"borrow_mut","","",11,[[]]],[11,"try_from","","",11,[[],["result",4]]],[11,"try_into","","",11,[[],["result",4]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"to_subset","","",11,[[],["option",4]]],[11,"is_in_subset","","",11,[[],["bool",15]]],[11,"to_subset_unchecked","","",11,[[]]],[11,"from_subset","","",11,[[]]],[11,"vzip","","",11,[[]]],[11,"from","","",12,[[]]],[11,"into","","",12,[[]]],[11,"to_owned","","",12,[[]]],[11,"clone_into","","",12,[[]]],[11,"borrow","","",12,[[]]],[11,"borrow_mut","","",12,[[]]],[11,"try_from","","",12,[[],["result",4]]],[11,"try_into","","",12,[[],["result",4]]],[11,"type_id","","",12,[[],["typeid",3]]],[11,"inlined_clone","","",12,[[]]],[11,"to_subset","","",12,[[],["option",4]]],[11,"is_in_subset","","",12,[[],["bool",15]]],[11,"to_subset_unchecked","","",12,[[]]],[11,"from_subset","","",12,[[]]],[11,"vzip","","",12,[[]]],[11,"from","","",13,[[]]],[11,"into","","",13,[[]]],[11,"to_owned","","",13,[[]]],[11,"clone_into","","",13,[[]]],[11,"borrow","","",13,[[]]],[11,"borrow_mut","","",13,[[]]],[11,"try_from","","",13,[[],["result",4]]],[11,"try_into","","",13,[[],["result",4]]],[11,"type_id","","",13,[[],["typeid",3]]],[11,"to_subset","","",13,[[],["option",4]]],[11,"is_in_subset","","",13,[[],["bool",15]]],[11,"to_subset_unchecked","","",13,[[]]],[11,"from_subset","","",13,[[]]],[11,"vzip","","",13,[[]]],[11,"from","","",14,[[]]],[11,"into","","",14,[[]]],[11,"to_owned","","",14,[[]]],[11,"clone_into","","",14,[[]]],[11,"borrow","","",14,[[]]],[11,"borrow_mut","","",14,[[]]],[11,"try_from","","",14,[[],["result",4]]],[11,"try_into","","",14,[[],["result",4]]],[11,"type_id","","",14,[[],["typeid",3]]],[11,"to_subset","","",14,[[],["option",4]]],[11,"is_in_subset","","",14,[[],["bool",15]]],[11,"to_subset_unchecked","","",14,[[]]],[11,"from_subset","","",14,[[]]],[11,"vzip","","",14,[[]]],[11,"from","","",15,[[]]],[11,"into","","",15,[[]]],[11,"to_owned","","",15,[[]]],[11,"clone_into","","",15,[[]]],[11,"borrow","","",15,[[]]],[11,"borrow_mut","","",15,[[]]],[11,"try_from","","",15,[[],["result",4]]],[11,"try_into","","",15,[[],["result",4]]],[11,"type_id","","",15,[[],["typeid",3]]],[11,"to_subset","","",15,[[],["option",4]]],[11,"is_in_subset","","",15,[[],["bool",15]]],[11,"to_subset_unchecked","","",15,[[]]],[11,"from_subset","","",15,[[]]],[11,"vzip","","",15,[[]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"inlined_clone","","",2,[[]]],[11,"to_subset","","",2,[[],["option",4]]],[11,"is_in_subset","","",2,[[],["bool",15]]],[11,"to_subset_unchecked","","",2,[[]]],[11,"from_subset","","",2,[[]]],[11,"vzip","","",2,[[]]],[11,"from","","",16,[[]]],[11,"into","","",16,[[]]],[11,"to_owned","","",16,[[]]],[11,"clone_into","","",16,[[]]],[11,"borrow","","",16,[[]]],[11,"borrow_mut","","",16,[[]]],[11,"try_from","","",16,[[],["result",4]]],[11,"try_into","","",16,[[],["result",4]]],[11,"type_id","","",16,[[],["typeid",3]]],[11,"inlined_clone","","",16,[[]]],[11,"to_subset","","",16,[[],["option",4]]],[11,"is_in_subset","","",16,[[],["bool",15]]],[11,"to_subset_unchecked","","",16,[[]]],[11,"from_subset","","",16,[[]]],[11,"vzip","","",16,[[]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"to_owned","","",3,[[]]],[11,"clone_into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"inlined_clone","","",3,[[]]],[11,"to_subset","","",3,[[],["option",4]]],[11,"is_in_subset","","",3,[[],["bool",15]]],[11,"to_subset_unchecked","","",3,[[]]],[11,"from_subset","","",3,[[]]],[11,"vzip","","",3,[[]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_owned","","",4,[[]]],[11,"clone_into","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"inlined_clone","","",4,[[]]],[11,"to_subset","","",4,[[],["option",4]]],[11,"is_in_subset","","",4,[[],["bool",15]]],[11,"to_subset_unchecked","","",4,[[]]],[11,"from_subset","","",4,[[]]],[11,"vzip","","",4,[[]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"to_string","","",5,[[],["string",3]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"to_subset","","",5,[[],["option",4]]],[11,"is_in_subset","","",5,[[],["bool",15]]],[11,"to_subset_unchecked","","",5,[[]]],[11,"from_subset","","",5,[[]]],[11,"vzip","","",5,[[]]],[11,"from","","",7,[[]]],[11,"into","","",7,[[]]],[11,"to_string","","",7,[[],["string",3]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"to_subset","","",7,[[],["option",4]]],[11,"is_in_subset","","",7,[[],["bool",15]]],[11,"to_subset_unchecked","","",7,[[]]],[11,"from_subset","","",7,[[]]],[11,"vzip","","",7,[[]]],[11,"from","","",8,[[]]],[11,"into","","",8,[[]]],[11,"to_owned","","",8,[[]]],[11,"clone_into","","",8,[[]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"to_subset","","",8,[[],["option",4]]],[11,"is_in_subset","","",8,[[],["bool",15]]],[11,"to_subset_unchecked","","",8,[[]]],[11,"from_subset","","",8,[[]]],[11,"vzip","","",8,[[]]],[11,"from","","",9,[[]]],[11,"into","","",9,[[]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"to_subset","","",9,[[],["option",4]]],[11,"is_in_subset","","",9,[[],["bool",15]]],[11,"to_subset_unchecked","","",9,[[]]],[11,"from_subset","","",9,[[]]],[11,"vzip","","",9,[[]]],[11,"clone","","",0,[[],["jointindicesref",4]]],[11,"clone","","",10,[[],["frameoffset",3]]],[11,"clone","","",1,[[],["sampledesc",3]]],[11,"clone","","",12,[[],["bonekeyframe",3]]],[11,"clone","","",13,[[],["sortedkeyframes",3]]],[11,"clone","","",14,[[],["bonekeyframes",3]]],[11,"clone","","",15,[[],["action",3]]],[11,"clone","","",2,[[],["bone",4]]],[11,"clone","","",16,[[],["coordinatesystem",3]]],[11,"clone","","",3,[[],["axis",4]]],[11,"clone","","",4,[[],["hand",4]]],[11,"clone","","",8,[[],["blenderarmature",3]]],[11,"default","","",11,[[],["actionkeyframes",3]]],[11,"default","","",13,[[],["sortedkeyframes",3]]],[11,"default","","",14,[[],["bonekeyframes",3]]],[11,"default","","",16,[[]]],[11,"default","","",8,[[],["blenderarmature",3]]],[11,"eq","","",11,[[["actionkeyframes",3]],["bool",15]]],[11,"ne","","",11,[[["actionkeyframes",3]],["bool",15]]],[11,"eq","","",12,[[["bonekeyframe",3]],["bool",15]]],[11,"ne","","",12,[[["bonekeyframe",3]],["bool",15]]],[11,"eq","","",13,[[["sortedkeyframes",3]],["bool",15]]],[11,"ne","","",13,[[["sortedkeyframes",3]],["bool",15]]],[11,"eq","","",14,[[["bonekeyframes",3]],["bool",15]]],[11,"ne","","",14,[[["bonekeyframes",3]],["bool",15]]],[11,"eq","","",15,[[["action",3]],["bool",15]]],[11,"ne","","",15,[[["action",3]],["bool",15]]],[11,"eq","","",2,[[["bone",4]],["bool",15]]],[11,"ne","","",2,[[["bone",4]],["bool",15]]],[11,"eq","","",16,[[["coordinatesystem",3]],["bool",15]]],[11,"ne","","",16,[[["coordinatesystem",3]],["bool",15]]],[11,"eq","","",3,[[["axis",4]],["bool",15]]],[11,"eq","","",4,[[["hand",4]],["bool",15]]],[11,"eq","","",8,[[["blenderarmature",3]],["bool",15]]],[11,"ne","","",8,[[["blenderarmature",3]],["bool",15]]],[11,"eq","","",9,[[["keyframe",3]],["bool",15]]],[11,"ne","","",9,[[["keyframe",3]],["bool",15]]],[11,"deref","","",11,[[]]],[11,"deref","","",13,[[]]],[11,"deref","","",14,[[]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",10,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",11,[[["formatter",3]],["result",6]]],[11,"fmt","","",12,[[["formatter",3]],["result",6]]],[11,"fmt","","",13,[[["formatter",3]],["result",6]]],[11,"fmt","","",14,[[["formatter",3]],["result",6]]],[11,"fmt","","",15,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",16,[[["formatter",3]],["result",6]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"fmt","","",7,[[["formatter",3]],["result",6]]],[11,"fmt","","",8,[[["formatter",3]],["result",6]]],[11,"fmt","","",9,[[["formatter",3]],["result",6]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"fmt","","",7,[[["formatter",3]],["result",6]]],[11,"serialize","","",11,[[],["result",4]]],[11,"serialize","","",12,[[],["result",4]]],[11,"serialize","","",13,[[],["result",4]]],[11,"serialize","","",14,[[],["result",4]]],[11,"serialize","","",15,[[],["result",4]]],[11,"serialize","","",2,[[],["result",4]]],[11,"serialize","","",16,[[],["result",4]]],[11,"serialize","","",3,[[],["result",4]]],[11,"serialize","","",4,[[],["result",4]]],[11,"serialize","","",8,[[],["result",4]]],[11,"serialize","","",9,[[],["result",4]]],[11,"deserialize","","",11,[[],["result",4]]],[11,"deserialize","","",12,[[],["result",4]]],[11,"deserialize","","",13,[[],["result",4]]],[11,"deserialize","","",14,[[],["result",4]]],[11,"deserialize","","",15,[[],["result",4]]],[11,"deserialize","","",2,[[],["result",4]]],[11,"deserialize","","",16,[[],["result",4]]],[11,"deserialize","","",3,[[],["result",4]]],[11,"deserialize","","",4,[[],["result",4]]],[11,"deserialize","","",8,[[],["result",4]]],[11,"deserialize","","",9,[[],["result",4]]],[11,"new","","",10,[[["f32",15]]]],[11,"new_with_elapsed_time_and_frames_per_second","","Calculate a frame offset based on the amount of time …",10,[[["duration",3],["u8",15]]]],[11,"get","","Return the inner float representing the frame offset.",10,[[],["f32",15]]],[11,"sample","","Sample the bone transforms from the action",11,[[["sampledesc",3]],[["u8",15],["bone",4],["btreemap",3]]]],[11,"new","","PanicsPanics if the provided list of keyframes is empty.",11,[[["vec",3],["keyframe",3]]]],[11,"keyframes","","Keyframes are guaranteed to be ordered from smallest …",11,[[],["vec",3]]],[11,"smallest_frame","","",11,[[],["u16",15]]],[11,"largest_frame","","",11,[[],["u16",15]]],[11,"insert_keyframe","","Insert a keyframe into the list of keyframes for the …",11,[[["keyframe",3]]]],[11,"new","","",12,[[["bone",4],["u16",15]]]],[11,"frame","","",12,[[],["u16",15]]],[11,"bone","","",12,[[],["bone",4]]],[11,"bone_mut","","",12,[[],["bone",4]]],[11,"set_bone","","",12,[[["bone",4]]]],[11,"sample","","Sample the bone transforms",14,[[["sampledesc",3],["u8",15]],["bone",4]]],[11,"new","","Create a new SortedKeyframes.",13,[[["bonekeyframe",3],["vec",3]]]],[11,"new","","Create an empty set of bone keyframes.",14,[[],["bonekeyframes",3]]],[11,"smallest_frame","","",14,[[],[["option",4],["u16",15]]]],[11,"largest_frame","","",14,[[],[["option",4],["u16",15]]]],[11,"frame_duration","","",14,[[],[["option",4],["u16",15]]]],[11,"frame_range_inclusive","","",14,[[],["option",4]]],[11,"insert_bone_keyframe","","Add a trnasformation keyframe for a bone.",14,[[["bonekeyframe",3],["u8",15]]]],[11,"new","","",15,[[]]],[11,"bone_keyframes","","The world space transform keyframes for each bone",15,[[],["bonekeyframes",3]]],[11,"insert_bone_keyframe","","Add a trnasformation keyframe for a bone.",15,[[["bonekeyframe",3],["u8",15]]]],[11,"pose_markers","","Labeled frame times for the action.",15,[[],["hashmap",3]]],[11,"pose_markers_mut","","See [<code>Action.method#pose_markers</code>]",15,[[],["hashmap",3]]],[11,"smallest_frame","","The smallest frame",15,[[],["u16",15]]],[11,"largest_frame","","The largest frame",15,[[],["u16",15]]],[11,"frame_duration","","Last frame - first frame",15,[[],["u16",15]]],[11,"relative_to_parent","","Get this bone’s transform relative to some parent bone.",2,[[["bone",4]],["bone",4]]],[11,"matrix_to_dual_quat","","Convert a matrix into a dual quaternion …",8,[[["bone",4]],["bone",4]]],[11,"dual_quat_to_matrix","","…",8,[[["bone",4]],["bone",4]]],[11,"new","","",16,[[["axis",4],["hand",4]]]],[11,"change_coordinate_system","","Shift around the data in the armature to a new coordinate …",8,[[["coordinatesystem",3]]]],[11,"interpolate_bones","","Interpolate in between the keyframes of your …",8,[[["jointindicesref",4],["sampledesc",3],["str",15]],[["u8",15],["bone",4],["btreemap",3]]]]],"p":[[4,"JointIndicesRef"],[3,"SampleDesc"],[4,"Bone"],[4,"Axis"],[4,"Hand"],[4,"FlattenArmatureError"],[13,"DuplicateArmatureNamesAcrossFiles"],[4,"BlenderError"],[3,"BlenderArmature"],[3,"Keyframe"],[3,"FrameOffset"],[3,"ActionKeyframes"],[3,"BoneKeyframe"],[3,"SortedKeyframes"],[3,"BoneKeyframes"],[3,"Action"],[3,"CoordinateSystem"]]},\
"blender_mesh":{"doc":"Blender files can have meshes such as circles, cubes, …","i":[[3,"CreateSingleIndexConfig","blender_mesh","Configuration for combining multiple indices into a …",null,null],[12,"bone_influences_per_vertex","","The number of bones that influence each vertex.",0,null],[12,"calculate_face_tangents","","Whether or not to calculate the tangents for each vertex.",0,null],[6,"MeshesByFilename","","",null,null],[6,"MeshesByMeshName","","",null,null],[5,"parse_meshes_from_blender_stdout","","Given a buffer of standard output from Blender we parse …",null,[[["str",15]],["meshesbyfilename",6]]],[6,"FlattenedExportedMeshes","","",null,null],[5,"flatten_exported_meshes_owned","","Convert MesheshByFilename into a HashMap<MeshName, …",null,[[["meshesbyfilename",6]],[["result",4],["flattenmesherror",4],["flattenedexportedmeshes",6]]]],[5,"flatten_exported_meshes","","Convert MesheshByFilename into a HashMap<MeshName, …",null,[[["meshesbyfilename",6]],[["flattenmesherror",4],["result",4],["hashmap",3]]]],[4,"FlattenMeshError","","An error when trying to flatten your exported data across …",null,null],[13,"DuplicateMeshNamesAcrossFiles","","",1,null],[12,"duplicates","blender_mesh::FlattenMeshError","",2,null],[3,"BoundingBox","blender_mesh","The bounding box that encompasses a mesh. This will …",null,null],[12,"min_corner","","The corner with the lowest x, y and z values",3,null],[12,"max_corner","","The corner with the greatest x, y and z values",3,null],[3,"PrincipledBSDF","","Material data for a mesh",null,null],[3,"BoneInfluence","","The index of a bone that influences the vertex along with …",null,null],[3,"MultiIndexedVertexAttributes","","Vertex data with multiple indices - not suited for OpenGL …",null,null],[3,"SingleIndexedVertexAttributes","","Most 3D model file formats export vertex data with …",null,null],[3,"Vertex","","A vertex within a mesh.",null,null],[3,"VertexAttribute","","Data for an individual vertex attribute such as …",null,null],[4,"Channel","","An individual channel within an image. Red, Green, or …",null,null],[13,"Red","","",4,null],[13,"Green","","",4,null],[13,"Blue","","",4,null],[4,"MaterialInput","","An input to a material property.",null,null],[13,"Uniform","","Some value that is uniform across all vertices / …",5,null],[13,"ImageTexture","","The name of the texture image (excluding the full path) …",5,null],[4,"BlenderError","","Something went wrong in the Blender child process that …",null,null],[13,"Stderr","","Errors in Blender are written to stderr. We capture the …",6,null],[3,"BlenderMesh","","All of the data about a mesh",null,null],[11,"armature_name","","The name of this mesh’s parent armature",7,[[],[["string",3],["option",4]]]],[11,"set_armature_name","","Set the name of this mesh’s parent armature",7,[[["string",3],["option",4]]]],[11,"materials","","A map of material name to the material’s data",7,[[],["hashmap",3]]],[11,"materials_mut","","A mutable map of material name to the material’s data",7,[[],["hashmap",3]]],[11,"custom_properties","","Custom properties for this mesh",7,[[],["hashmap",3]]],[11,"bounding_box","","The smallest box that contains the entire mesh",7,[[],["boundingbox",3]]],[11,"set_bounding_box","","Set the mesh’s bounding box.",7,[[["boundingbox",3]]]],[11,"name","","The name of the mesh",7,[[],["string",3]]],[11,"set_name","","Set the name of the mesh",7,[[["string",3]]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"to_owned","","",3,[[]]],[11,"clone_into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"inlined_clone","","",3,[[]]],[11,"to_subset","","",3,[[],["option",4]]],[11,"is_in_subset","","",3,[[],["bool",15]]],[11,"to_subset_unchecked","","",3,[[]]],[11,"from_subset","","",3,[[]]],[11,"vzip","","",3,[[]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"to_subset","","",0,[[],["option",4]]],[11,"is_in_subset","","",0,[[],["bool",15]]],[11,"to_subset_unchecked","","",0,[[]]],[11,"from_subset","","",0,[[]]],[11,"vzip","","",0,[[]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_string","","",1,[[],["string",3]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"as_fail","","",1,[[],["fail",8]]],[11,"to_subset","","",1,[[],["option",4]]],[11,"is_in_subset","","",1,[[],["bool",15]]],[11,"to_subset_unchecked","","",1,[[]]],[11,"from_subset","","",1,[[]]],[11,"vzip","","",1,[[]]],[11,"from","","",8,[[]]],[11,"into","","",8,[[]]],[11,"to_owned","","",8,[[]]],[11,"clone_into","","",8,[[]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"to_subset","","",8,[[],["option",4]]],[11,"is_in_subset","","",8,[[],["bool",15]]],[11,"to_subset_unchecked","","",8,[[]]],[11,"from_subset","","",8,[[]]],[11,"vzip","","",8,[[]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"to_owned","","",5,[[]]],[11,"clone_into","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"to_subset","","",5,[[],["option",4]]],[11,"is_in_subset","","",5,[[],["bool",15]]],[11,"to_subset_unchecked","","",5,[[]]],[11,"from_subset","","",5,[[]]],[11,"vzip","","",5,[[]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_owned","","",4,[[]]],[11,"clone_into","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"inlined_clone","","",4,[[]]],[11,"to_subset","","",4,[[],["option",4]]],[11,"is_in_subset","","",4,[[],["bool",15]]],[11,"to_subset_unchecked","","",4,[[]]],[11,"from_subset","","",4,[[]]],[11,"vzip","","",4,[[]]],[11,"from","","",9,[[]]],[11,"into","","",9,[[]]],[11,"to_owned","","",9,[[]]],[11,"clone_into","","",9,[[]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"to_subset","","",9,[[],["option",4]]],[11,"is_in_subset","","",9,[[],["bool",15]]],[11,"to_subset_unchecked","","",9,[[]]],[11,"from_subset","","",9,[[]]],[11,"vzip","","",9,[[]]],[11,"from","","",10,[[]]],[11,"into","","",10,[[]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"to_subset","","",10,[[],["option",4]]],[11,"is_in_subset","","",10,[[],["bool",15]]],[11,"to_subset_unchecked","","",10,[[]]],[11,"from_subset","","",10,[[]]],[11,"vzip","","",10,[[]]],[11,"from","","",11,[[]]],[11,"into","","",11,[[]]],[11,"to_owned","","",11,[[]]],[11,"clone_into","","",11,[[]]],[11,"borrow","","",11,[[]]],[11,"borrow_mut","","",11,[[]]],[11,"try_from","","",11,[[],["result",4]]],[11,"try_into","","",11,[[],["result",4]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"inlined_clone","","",11,[[]]],[11,"to_subset","","",11,[[],["option",4]]],[11,"is_in_subset","","",11,[[],["bool",15]]],[11,"to_subset_unchecked","","",11,[[]]],[11,"from_subset","","",11,[[]]],[11,"vzip","","",11,[[]]],[11,"from","","",12,[[]]],[11,"into","","",12,[[]]],[11,"to_owned","","",12,[[]]],[11,"clone_into","","",12,[[]]],[11,"borrow","","",12,[[]]],[11,"borrow_mut","","",12,[[]]],[11,"try_from","","",12,[[],["result",4]]],[11,"try_into","","",12,[[],["result",4]]],[11,"type_id","","",12,[[],["typeid",3]]],[11,"inlined_clone","","",12,[[]]],[11,"to_subset","","",12,[[],["option",4]]],[11,"is_in_subset","","",12,[[],["bool",15]]],[11,"to_subset_unchecked","","",12,[[]]],[11,"from_subset","","",12,[[]]],[11,"vzip","","",12,[[]]],[11,"from","","",13,[[]]],[11,"into","","",13,[[]]],[11,"to_owned","","",13,[[]]],[11,"clone_into","","",13,[[]]],[11,"borrow","","",13,[[]]],[11,"borrow_mut","","",13,[[]]],[11,"try_from","","",13,[[],["result",4]]],[11,"try_into","","",13,[[],["result",4]]],[11,"type_id","","",13,[[],["typeid",3]]],[11,"to_subset","","",13,[[],["option",4]]],[11,"is_in_subset","","",13,[[],["bool",15]]],[11,"to_subset_unchecked","","",13,[[]]],[11,"from_subset","","",13,[[]]],[11,"vzip","","",13,[[]]],[11,"from","","",6,[[]]],[11,"into","","",6,[[]]],[11,"to_string","","",6,[[],["string",3]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"as_fail","","",6,[[],["fail",8]]],[11,"to_subset","","",6,[[],["option",4]]],[11,"is_in_subset","","",6,[[],["bool",15]]],[11,"to_subset_unchecked","","",6,[[]]],[11,"from_subset","","",6,[[]]],[11,"vzip","","",6,[[]]],[11,"from","","",7,[[]]],[11,"into","","",7,[[]]],[11,"to_owned","","",7,[[]]],[11,"clone_into","","",7,[[]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"to_subset","","",7,[[],["option",4]]],[11,"is_in_subset","","",7,[[],["bool",15]]],[11,"to_subset_unchecked","","",7,[[]]],[11,"from_subset","","",7,[[]]],[11,"vzip","","",7,[[]]],[11,"clone","","",3,[[],["boundingbox",3]]],[11,"clone","","",8,[[],["principledbsdf",3]]],[11,"clone","","",5,[[],["materialinput",4]]],[11,"clone","","",4,[[],["channel",4]]],[11,"clone","","",9,[[],["vertexattribute",3]]],[11,"clone","","",11,[[],["vertex",3]]],[11,"clone","","",12,[[],["boneinfluence",3]]],[11,"clone","","",13,[[],["multiindexedvertexattributes",3]]],[11,"clone","","",7,[[],["blendermesh",3]]],[11,"default","","",3,[[]]],[11,"default","","",0,[[],["createsingleindexconfig",3]]],[11,"default","","",8,[[],["principledbsdf",3]]],[11,"default","","",5,[[]]],[11,"default","","",9,[[],["vertexattribute",3]]],[11,"default","","",10,[[],["singleindexedvertexattributes",3]]],[11,"default","","",11,[[],["vertex",3]]],[11,"default","","",13,[[],["multiindexedvertexattributes",3]]],[11,"default","","",7,[[],["blendermesh",3]]],[11,"eq","","",3,[[["boundingbox",3]],["bool",15]]],[11,"ne","","",3,[[["boundingbox",3]],["bool",15]]],[11,"eq","","",8,[[["principledbsdf",3]],["bool",15]]],[11,"ne","","",8,[[["principledbsdf",3]],["bool",15]]],[11,"eq","","",5,[[["materialinput",4]],["bool",15]]],[11,"ne","","",5,[[["materialinput",4]],["bool",15]]],[11,"eq","","",4,[[["channel",4]],["bool",15]]],[11,"eq","","",9,[[["vertexattribute",3]],["bool",15]]],[11,"ne","","",9,[[["vertexattribute",3]],["bool",15]]],[11,"eq","","",10,[[["singleindexedvertexattributes",3]],["bool",15]]],[11,"ne","","",10,[[["singleindexedvertexattributes",3]],["bool",15]]],[11,"eq","","",11,[[["vertex",3]],["bool",15]]],[11,"ne","","",11,[[["vertex",3]],["bool",15]]],[11,"eq","","",12,[[["boneinfluence",3]],["bool",15]]],[11,"ne","","",12,[[["boneinfluence",3]],["bool",15]]],[11,"eq","","",13,[[["multiindexedvertexattributes",3]],["bool",15]]],[11,"ne","","",13,[[["multiindexedvertexattributes",3]],["bool",15]]],[11,"eq","","",7,[[["blendermesh",3]],["bool",15]]],[11,"ne","","",7,[[["blendermesh",3]],["bool",15]]],[11,"deref","","",9,[[]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",8,[[["formatter",3]],["result",6]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"fmt","","",9,[[["formatter",3]],["result",6]]],[11,"fmt","","",10,[[["formatter",3]],["result",6]]],[11,"fmt","","",11,[[["formatter",3]],["result",6]]],[11,"fmt","","",12,[[["formatter",3]],["result",6]]],[11,"fmt","","",13,[[["formatter",3]],["result",6]]],[11,"fmt","","",6,[[["formatter",3]],["result",6]]],[11,"fmt","","",7,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",6,[[["formatter",3]],["result",6]]],[11,"name","","",1,[[],[["option",4],["str",15]]]],[11,"cause","","",1,[[],[["option",4],["fail",8]]]],[11,"backtrace","","",1,[[],[["backtrace",3],["option",4]]]],[11,"name","","",6,[[],[["option",4],["str",15]]]],[11,"cause","","",6,[[],[["option",4],["fail",8]]]],[11,"backtrace","","",6,[[],[["backtrace",3],["option",4]]]],[11,"deserialize","","",3,[[],["result",4]]],[11,"deserialize","","",8,[[],["result",4]]],[11,"deserialize","","",5,[[],["result",4]]],[11,"deserialize","","",4,[[],["result",4]]],[11,"deserialize","","",9,[[],["result",4]]],[11,"deserialize","","",10,[[],["result",4]]],[11,"deserialize","","",11,[[],["result",4]]],[11,"deserialize","","",12,[[],["result",4]]],[11,"deserialize","","",13,[[],["result",4]]],[11,"deserialize","","",7,[[],["result",4]]],[11,"serialize","","",3,[[],["result",4]]],[11,"serialize","","",8,[[],["result",4]]],[11,"serialize","","",5,[[],["result",4]]],[11,"serialize","","",4,[[],["result",4]]],[11,"serialize","","",9,[[],["result",4]]],[11,"serialize","","",10,[[],["result",4]]],[11,"serialize","","",11,[[],["result",4]]],[11,"serialize","","",12,[[],["result",4]]],[11,"serialize","","",13,[[],["result",4]]],[11,"serialize","","",7,[[],["result",4]]],[11,"face_weight_normals","","Alter normals to be both surface weighted (connected …",10,[[],[["result",4],["weightednormalserror",4]]]],[11,"combine_vertex_indices","","We store our exported Blender mesh with indices for …",7,[[["createsingleindexconfig",3]],["singleindexedvertexattributes",3]]],[11,"interleave_vertex_data","","",7,[[],[["vec",3],["u8",15]]]],[11,"new","","Create a new physically-based material.",8,[[["materialinput",4],["f32",15],["option",4],["materialinput",4],["string",3]]]],[11,"base_color","","The base_color of the material.",8,[[],["materialinput",4]]],[11,"roughness","","The roughness of the material.",8,[[],["materialinput",4]]],[11,"metallic","","How metallic the material is. Most materials should be …",8,[[],["materialinput",4]]],[11,"normal_map","","The normal map",8,[[],[["string",3],["option",4]]]],[11,"new","","TODO: Introduce thiserror and add error handling to this …",9,[[["vec",3],["u8",15]],[["result",4],["vertexattribute",3]]]],[11,"as_slice","","",9,[[]]],[11,"attribute_size","","The number of values per vertex.",9,[[],["u8",15]]],[11,"data","","Get the underlying data for this attribute. Useful for …",9,[[],["vec",3]]],[11,"interleave","","Combine anu number of vertex attributes into a single …",10,[[],[["result",4],["vec",3],["interleaveerror",4]]]],[11,"position","","The model space position of this Vertex",11,[[]]],[11,"normal","","The surface normal for the face that this Vertex belongs …",11,[[],["option",4]]],[11,"face_tangent","","The face tangent for the face that this Vertex belongs to",11,[[],["option",4]]],[11,"uv","","The UV coordinates for this Vertex",11,[[],["option",4]]],[11,"bones","","The bones that influence this Vertex.",11,[[],["option",4]]],[11,"bone_idx","","The index of this bone within the mesh’s parent armature…",12,[[],["u8",15]]],[11,"weight","","The amount between [0.0, 1.0] that this bone should …",12,[[],["f32",15]]],[11,"indices","","For <code>SingleIndexVertexData</code> every 3 indices corresponds to …",10,[[],["vec",3]]],[11,"vertices","","All of the vertex data for the mesh.",10,[[],["vec",3]]],[11,"y_up","","Blender meshes get exported with a Z up coordinate system.…",7,[[]]],[11,"pbr_cube_without_textures","","Create a default Blender cube with uniform PBR texture …",7,[[]]]],"p":[[3,"CreateSingleIndexConfig"],[4,"FlattenMeshError"],[13,"DuplicateMeshNamesAcrossFiles"],[3,"BoundingBox"],[4,"Channel"],[4,"MaterialInput"],[4,"BlenderError"],[3,"BlenderMesh"],[3,"PrincipledBSDF"],[3,"VertexAttribute"],[3,"SingleIndexedVertexAttributes"],[3,"Vertex"],[3,"BoneInfluence"],[3,"MultiIndexedVertexAttributes"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);
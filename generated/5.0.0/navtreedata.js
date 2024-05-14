/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "Jolt Physics", "index.html", [
    [ "Architecture of Jolt Physics", "index.html#architecture-jolt-physics", null ],
    [ "Bodies", "index.html#bodies", [
      [ "Types", "index.html#body-types", null ],
      [ "Creating Bodies", "index.html#creating-bodies", null ],
      [ "Multithreaded Access", "index.html#autotoc_md69", null ],
      [ "Single Threaded Access", "index.html#single-threaded-access", null ],
      [ "Shapes", "index.html#shapes", [
        [ "Dynamic Mesh Shapes", "index.html#dynamic-mesh-shapes", null ],
        [ "Creating Shapes", "index.html#creating-shapes", null ],
        [ "Saving Shapes", "index.html#saving-shapes", null ],
        [ "Convex Radius", "index.html#convex-radius", null ],
        [ "Center of Mass", "index.html#center-of-mass", null ],
        [ "Creating Custom Shapes", "index.html#creating-custom-shapes", null ]
      ] ],
      [ "Sensors", "index.html#sensors", null ],
      [ "Sleeping", "index.html#sleeping-bodies", null ],
      [ "Soft Bodies", "index.html#soft-bodies", [
        [ "Soft Body Contact Listeners", "index.html#soft-body-contact-listener", null ],
        [ "Skinning Soft Bodies", "index.html#skinning-soft-bodies", null ],
        [ "Soft Body Work In Progress", "index.html#soft-body-wip", null ]
      ] ]
    ] ],
    [ "Constraints", "index.html#constraints", [
      [ "Constraint Motors", "index.html#constraint-motors", null ],
      [ "Breakable Constraints", "index.html#breakable-constraints", null ]
    ] ],
    [ "Collision Detection", "index.html#collision-detection", [
      [ "Broad Phase", "index.html#broad-phase", null ],
      [ "Narrow Phase", "index.html#narrow-phase", null ],
      [ "Collision Filtering", "index.html#collision-filtering", null ],
      [ "Continuous Collision Detection", "index.html#continuous-collision-detection", null ],
      [ "Ghost Collisions", "index.html#ghost-collisions", null ]
    ] ],
    [ "Character Controllers", "index.html#character-controllers", null ],
    [ "The Simulation Step", "index.html#the-simulation-step", null ],
    [ "Conventions and Limits", "index.html#conventions-and-limits", null ],
    [ "Big Worlds", "index.html#big-worlds", null ],
    [ "Deterministic Simulation", "index.html#deterministic-simulation", null ],
    [ "Rolling Back a Simulation", "index.html#rolling-back-a-simulation", null ],
    [ "Working With Multiple Physics Systems", "index.html#working-with-multiple-physics-systems", null ],
    [ "Debug Rendering", "index.html#debug-rendering", null ],
    [ "Memory Management", "index.html#memory-management", null ],
    [ "The Simulation Step in Detail", "index.html#the-simulation-step-in-detail", [
      [ "Broad Phase Update Prepare", "index.html#broad-phase-update-prepare", null ],
      [ "Broad Phase Update Finalize", "index.html#broad-phase-update-finalize", null ],
      [ "Step Listeners", "index.html#step-listeners-update", null ],
      [ "Apply Gravity", "index.html#apply-gravity-update", null ],
      [ "Determine Active Constraints", "index.html#determine-active-constraints", null ],
      [ "Build Islands from Constraints", "index.html#build-islands-from-constraints", null ],
      [ "Find Collisions", "index.html#find-collisions", null ],
      [ "Setup Velocity Constraints", "index.html#setup-velocity-constraints", null ],
      [ "Finalize Islands", "index.html#finalize-islands", null ],
      [ "Set Body Island Idx", "index.html#set-body-island-idx", null ],
      [ "Solve Velocity Constraints", "index.html#solve-velocity-constraints", null ],
      [ "Pre Integrate", "index.html#pre-integrate", null ],
      [ "Integrate & Clamp Velocities", "index.html#integrate-and-clamp-velocities", null ],
      [ "Post Integrate", "index.html#post-integrate", null ],
      [ "Find CCD Contacts", "index.html#find-ccd-contacts", null ],
      [ "Resolve CCD Contacts", "index.html#resolve-ccd-contacts", null ],
      [ "Finalize Contact Cache, Contact Removed Callbacks", "index.html#finalize-contact-cache", null ],
      [ "Solve Position Constraints, Update Bodies Broad Phase", "index.html#solve-position-constraints", null ],
      [ "Soft Body Prepare", "index.html#soft-body-prepare", null ],
      [ "Soft Body Collide", "index.html#soft-body-collide", null ],
      [ "Soft Body Simulate", "index.html#soft-body-simulate", null ],
      [ "Soft Body Finalize", "index.html#soft-body-finalize", null ]
    ] ],
    [ "Jolt Physics Samples", "md__docs_2_samples.html", [
      [ "General Controls", "md__docs_2_samples.html#autotoc_md7", null ],
      [ "The Tests", "md__docs_2_samples.html#autotoc_md8", [
        [ "Vehicles", "md__docs_2_samples.html#autotoc_md9", null ],
        [ "Rig (Ragdolls)", "md__docs_2_samples.html#autotoc_md10", null ],
        [ "Soft Body", "md__docs_2_samples.html#autotoc_md11", null ],
        [ "Character", "md__docs_2_samples.html#autotoc_md12", null ],
        [ "Water", "md__docs_2_samples.html#autotoc_md13", null ],
        [ "Constraints", "md__docs_2_samples.html#autotoc_md14", null ],
        [ "General", "md__docs_2_samples.html#autotoc_md17", null ],
        [ "Shapes & Scaled Shapes", "md__docs_2_samples.html#autotoc_md18", null ]
      ] ]
    ] ],
    [ "Performance Test", "md__docs_2_performance_test.html", [
      [ "Commandline options", "md__docs_2_performance_test.html#autotoc_md2", null ],
      [ "Output", "md__docs_2_performance_test.html#autotoc_md3", null ],
      [ "Results", "md__docs_2_performance_test.html#autotoc_md4", null ]
    ] ],
    [ "Release Notes", "md__docs_2_release_notes.html", [
      [ "v5.0.0", "md__docs_2_release_notes.html#autotoc_md20", [
        [ "New Functionality", "md__docs_2_release_notes.html#autotoc_md21", [
          [ "Soft Body", "md__docs_2_release_notes.html#autotoc_md22", null ],
          [ "Vehicles", "md__docs_2_release_notes.html#autotoc_md25", null ],
          [ "Character", "md__docs_2_release_notes.html#autotoc_md26", null ],
          [ "Constraints", "md__docs_2_release_notes.html#autotoc_md28", null ],
          [ "Collision Detection", "md__docs_2_release_notes.html#autotoc_md29", null ],
          [ "Simulation", "md__docs_2_release_notes.html#autotoc_md31", null ],
          [ "Various", "md__docs_2_release_notes.html#autotoc_md34", null ]
        ] ],
        [ "Removed functionality", "md__docs_2_release_notes.html#autotoc_md36", null ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md37", null ]
      ] ],
      [ "v4.0.2", "md__docs_2_release_notes.html#autotoc_md40", [
        [ "New functionality", "md__docs_2_release_notes.html#autotoc_md41", null ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md42", null ]
      ] ],
      [ "v4.0.1", "md__docs_2_release_notes.html#autotoc_md43", [
        [ "New functionality", "md__docs_2_release_notes.html#autotoc_md44", null ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md45", null ]
      ] ],
      [ "v4.0.0", "md__docs_2_release_notes.html#autotoc_md47", [
        [ "New functionality", "md__docs_2_release_notes.html#autotoc_md49", null ],
        [ "Removed functionality", "md__docs_2_release_notes.html#autotoc_md51", null ],
        [ "New supported platforms", "md__docs_2_release_notes.html#autotoc_md52", null ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md53", null ]
      ] ],
      [ "v3.0.0", "md__docs_2_release_notes.html#autotoc_md54", null ],
      [ "v2.0.1", "md__docs_2_release_notes.html#autotoc_md55", null ],
      [ "v2.0.0", "md__docs_2_release_notes.html#autotoc_md56", [
        [ "Major new functionality", "md__docs_2_release_notes.html#autotoc_md57", null ],
        [ "New supported compilers", "md__docs_2_release_notes.html#autotoc_md58", null ],
        [ "New supported platforms", "md__docs_2_release_notes.html#autotoc_md59", null ]
      ] ],
      [ "v1.1.0", "md__docs_2_release_notes.html#autotoc_md60", null ],
      [ "v1.0.0", "md__docs_2_release_notes.html#autotoc_md61", null ]
    ] ],
    [ "Breaking API Changes", "md__docs_2_a_p_i_changes.html", [
      [ "Changes between v4.0.2 and v5.0.0", "md__docs_2_a_p_i_changes.html#autotoc_md19", null ],
      [ "Changes between v4.0.0 and v4.0.2", "md__docs_2_a_p_i_changes.html#autotoc_md23", null ],
      [ "Changes between v3.0.1 and v4.0.0", "md__docs_2_a_p_i_changes.html#autotoc_md24", null ],
      [ "Changes between v2.0.1 and v3.0.0", "md__docs_2_a_p_i_changes.html#autotoc_md27", null ],
      [ "Changes between v1.1.0 and v2.0.0", "md__docs_2_a_p_i_changes.html#autotoc_md30", null ],
      [ "Changes between v1.0.0 and v1.1.0", "md__docs_2_a_p_i_changes.html#autotoc_md32", null ],
      [ "Changes between v0.0.0 and v1.0.0", "md__docs_2_a_p_i_changes.html#autotoc_md33", null ]
    ] ],
    [ "Building and Using Jolt Physics", "md__build_2_r_e_a_d_m_e.html", [
      [ "Build Types", "md__build_2_r_e_a_d_m_e.html#autotoc_md35", null ],
      [ "Includes", "md__build_2_r_e_a_d_m_e.html#autotoc_md38", null ],
      [ "Defines", "md__build_2_r_e_a_d_m_e.html#autotoc_md39", null ],
      [ "Logging & Asserting", "md__build_2_r_e_a_d_m_e.html#autotoc_md46", null ],
      [ "Custom Memory Allocator", "md__build_2_r_e_a_d_m_e.html#autotoc_md48", null ],
      [ "Building", "md__build_2_r_e_a_d_m_e.html#autotoc_md50", null ],
      [ "Other Build Tools", "md__build_2_r_e_a_d_m_e.html#autotoc_md62", null ],
      [ "Errors", "md__build_2_r_e_a_d_m_e.html#autotoc_md63", [
        [ "Link Error: File Format Not Recognized", "md__build_2_r_e_a_d_m_e.html#autotoc_md64", null ],
        [ "Link Error: Unresolved External Symbol", "md__build_2_r_e_a_d_m_e.html#autotoc_md65", null ],
        [ "DirectX Error", "md__build_2_r_e_a_d_m_e.html#autotoc_md66", null ],
        [ "Illegal Instruction Error", "md__build_2_r_e_a_d_m_e.html#autotoc_md67", null ]
      ] ],
      [ "Doxygen on Windows", "md__build_2_r_e_a_d_m_e.html#autotoc_md68", null ]
    ] ],
    [ "Projects Using Jolt", "md__docs_2_projects_using_jolt.html", null ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Typedefs", "functions_type.html", null ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", null ],
        [ "Related Symbols", "functions_rela.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", "globals_func" ],
        [ "Variables", "globals_vars.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Enumerator", "globals_eval.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"_a_a_b_b_tree_builder_8cpp.html",
"_constraint_manager_8h.html#aee2917a71c172c61d1e2d77c1fad813b",
"_independent_axis_constraint_part_8h_source.html",
"_oriented_box_8cpp.html",
"_serializable_attribute_enum_8h_source.html",
"_triangle_codec_indexed8_bit_pack_s_o_a4_flags_8h.html",
"class_angle_constraint_part.html#a4db6fb3120c161301e04ee92276544d4",
"class_body_interface.html#a64e1dd1d09088ca5a07384397f77f0aa",
"class_broad_phase_layer_interface_table.html#a0b15a05cfa5251b19bd3f1e5c14b38f3",
"class_closest_hit_collision_collector.html",
"class_constraint.html#ad2530947a5b0c4c24e965ab85fdf9ec8",
"class_cylinder_shape.html#a30d8aeffc7430806287324f7f55eb5a5",
"class_decorated_shape.html#a24a5fc486a279b6afaf2cada33f28272",
"class_gear_constraint_part.html#ad9da946340f02066a9031124bec183af",
"class_island_builder.html#a323b5204fe8c9fdb7a15791469780259",
"class_mat44.html#af9c9948eced621a54424f05c397824dd",
"class_node_codec_quad_tree_half_float_1_1_encoding_context.html#ac621a13ec8689e7cc9ff1fb995115874",
"class_path_constraint_settings.html#a74a9207faa30912010e4e1a4acd49745",
"class_quad_tree.html#a3bcf63c8fc180d29f75794e979399756",
"class_ref_const.html#ad331b640eec29970a066ff44f988ccab",
"class_shape.html#af00149d141125f15e56d9aa82f07b6d4",
"class_slider_constraint.html#ae1378d973e0d535040c6bb36eb368dc5",
"class_specified_object_layer_filter.html",
"class_swing_twist_constraint.html#ae841a8acf92617eca1192909d2885f41",
"class_triangle_splitter.html",
"class_vec4.html#acff7d4f95f6dcce1d825c0bfb3798c9a",
"class_wheel.html#a201340ce33a37ff9eb3cc26cf8ae4cc8",
"globals_eval.html",
"struct_body_manager_1_1_body_stats.html#ab35d057b00908a87b8ffc2b9bf0ff3e7",
"struct_large_island_splitter_1_1_split.html#a6a88a677ec69868a94fbb451ab253342",
"struct_soft_body_shared_settings_1_1_vertex_attributes.html#a11c3e0f080ed6c5b738a2e0800a07909"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';
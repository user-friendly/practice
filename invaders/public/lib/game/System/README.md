NOTES
-----

Render
------

Should have two things associated with it - a canvas context and an entity with a camera component.

Camera
------

A camera has a position in the world and a viewport (as a rectangle). The Z coordinate in this
engine context is not used as in a 3d one.

The position can be a Transform.

Coordinates
-----------

The simple Vector3d class will be used.

World coordinates will be stored in the Transform component.

Renderable
----------

An entity that can be displayed needs: a transform and a graphical representation.

The Renderable component can have the asset/drawable.

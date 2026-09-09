from pylib.listnode import make_linked_list

all = (
    (False, make_linked_list([1, 2], [1, None])),
    (False, make_linked_list()),
    (False, make_linked_list([], [1])),
    (False, make_linked_list([1])),
    (True, make_linked_list([3, 2, 0, -4], [1, 2, 3, 1])),
    (True, make_linked_list([1, 2], [1, 0])),
    (False, make_linked_list([1], [None])),
)

from typing import List


# Definition for a binary tree node.
# Note that parent member is not in the LC definition.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
        self.parent = None


def make_binary_tree(heap: List[int] = None) -> TreeNode | None:
    """
    values: Binary tree heap.
    """

    if heap is None or len(heap) <= 0:
        return None

    root = TreeNode(heap[0])

    last_nodes = [root]
    current_nodes = []
    l, i = 1, 1
    # Breath-first walk.
    while i < len(heap):
        end = i + 2**l
        left = True
        # Walks one level
        while i < end:
            node = TreeNode(heap[i]) if heap[i] is not None else None
            current_nodes.append(node)

            if len(last_nodes) > 0 and last_nodes[0] is not None:
                if node is not None:
                    node.parent = last_nodes[0]

                if left is True:
                    last_nodes[0].left = node
                else:
                    last_nodes[0].right = node

            if left is False and len(last_nodes) > 0:
                last_nodes.pop(0)

            left = not left

            i += 1
            pass  # End of level walk.

        # print(
        #     f"Depth {l}, elements: ",
        #     ",".join([str(n.val if n is not None else "None") for n in current_nodes]),
        # )

        last_nodes.extend(current_nodes)
        current_nodes = []

        l += 1
        pass  # End of main loop.

    return root


def print_tree_flat(root: TreeNode | None) -> None:

    def _depth_first_rec(node: TreeNode):
        if node is None:
            return print(f"[None]", end="")

        if node.parent is None:
            print(f"root({node.val})->", end="")
        else:
            print(f"[{node.val}]->", end="")

        _depth_first_rec(node.left)
        _depth_first_rec(node.right)

        return None

    print("BTree debug: ")
    _depth_first_rec(root)
    print("End BTree debug.")

    return None

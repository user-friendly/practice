from typing import List, Optional


# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


def make_linked_list(
    values: Optional[List] = None, links: Optional[List] = None
) -> ListNode | None:
    """
    values: A list of values to place in each ListNode
    links: A list of links, lenght must be equal to the values list's length.
            It acts as a map of which list node should connect which node, or None, denoted by its index in.
            `values[i].next = values[links[i]]
    """

    if values is None or links is None or len(values) == 0 or len(links) is 0:
        return None

    nodes: List[ListNode] = []

    for n in values:
        nodes.append(ListNode(n))

    for i, node in enumerate(nodes):
        if links[i] is not None:
            node.next = nodes[links[i]]

    return nodes[0]

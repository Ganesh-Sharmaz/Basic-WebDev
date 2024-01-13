from collections import deque

def is_valid(x, y, m, n):
    return 0 <= x < m and 0 <= y < n

def ignite_forest(m, n, start_x, start_y, layout):
    directions = [(0, 1), (0, -1), (1, 0), (-1, 0), (1, 1), (-1, 1), (1, -1), (-1, -1)]

    visited = [[False] * n for _ in range(m)]
    queue = deque([(start_x, start_y, 0)])

    while queue:
        x, y, minutes = queue.popleft()

        for dx, dy in directions:
            nx, ny = x + dx, y + dy
            if is_valid(nx, ny, m, n) and not visited[nx][ny] and layout[nx][ny] == 'T':
                visited[nx][ny] = True
                queue.append((nx, ny, minutes + 1))

    return minutes

def main():
    m, n = map(int, input().split())
    start_x, start_y = map(int, input().split())

    layout = [input().strip() for _ in range(m)]

    start_x -= 1
    start_y -= 1

    result = ignite_forest(m, n, start_x, start_y, layout)

    print(result)

if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""UTF-8 safe file helpers for Hermes profile scripts."""

from __future__ import annotations

from pathlib import Path


def read_utf8(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def write_utf8(path: Path, content: str) -> None:
    path.write_text(content, encoding="utf-8", newline="\n")
